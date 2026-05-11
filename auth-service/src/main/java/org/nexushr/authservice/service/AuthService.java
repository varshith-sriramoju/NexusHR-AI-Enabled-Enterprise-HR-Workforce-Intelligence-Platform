package org.nexushr.authservice.service;

import org.nexushr.authservice.dto.AuthResponse;
import org.nexushr.authservice.dto.LoginRequest;
import org.nexushr.authservice.dto.RefreshTokenRequest;
import org.nexushr.authservice.dto.RegisterRequest;
import org.nexushr.authservice.entity.Employee;
import org.nexushr.authservice.entity.RefreshToken;
import org.nexushr.authservice.entity.Role;
import org.nexushr.authservice.repository.EmployeeRepository;
import org.nexushr.authservice.repository.RefreshTokenRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class AuthService {

    private final EmployeeRepository employeeRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            EmployeeRepository employeeRepository,
            RefreshTokenRepository refreshTokenRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.employeeRepository = employeeRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest request) {

        Employee employee = new Employee();

        employee.setFullName(request.getFullName());
        employee.setEmail(request.getEmail());

        employee.setPassword(
                passwordEncoder.encode(request.getPassword()));

        employee.setRole(Role.EMPLOYEE);

        employeeRepository.save(employee);

        return "Employee Registered Successfully";
    }

    public AuthResponse login(LoginRequest request) {

        Employee employee = employeeRepository
                .findByEmail(request.getEmail())
                .orElseThrow();

        if (!passwordEncoder.matches(
                request.getPassword(),
                employee.getPassword())) {

            throw new RuntimeException("Invalid Password");
        }

        String accessToken =
                jwtService.generateToken(employee.getEmail());

        String refreshToken =
                UUID.randomUUID().toString();

        RefreshToken token = new RefreshToken();

        token.setToken(refreshToken);
        token.setUser(employee);

        token.setExpiresDate(
                LocalDateTime.now().plusDays(7));

        refreshTokenRepository.save(token);

        return new AuthResponse(
                accessToken,
                refreshToken,
                employee.getRole().name()
        );
    }
    public AuthResponse refreshToken(
            RefreshTokenRequest request) {

        RefreshToken token = refreshTokenRepository
                .findByToken(request.getRefreshToken())
                .orElseThrow();

        if (token.getExpiresDate().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Refresh Token Expired");
        }

        String accessToken =
                jwtService.generateToken(
                        token.getUser().getEmail());

        return new AuthResponse(
                accessToken,
                request.getRefreshToken(),
                token.getUser().getRole().name()
        );
    }
}