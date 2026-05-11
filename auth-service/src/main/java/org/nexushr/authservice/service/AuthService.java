package org.nexushr.authservice.service;

import org.nexushr.authservice.dto.LoginRequest;
import org.nexushr.authservice.dto.RegisterRequest;
import org.nexushr.authservice.entity.Employee;
import org.nexushr.authservice.entity.Role;
import org.nexushr.authservice.repository.EmployeeRepository;
import org.nexushr.authservice.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(EmployeeRepository employeeRepository,
                       PasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil) {

        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(RegisterRequest request) {

        Employee employee = new Employee();

        employee.setFullName(request.getFullName());
        employee.setEmail(request.getEmail());

        employee.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        employee.setRole(Role.EMPLOYEE);

        employeeRepository.save(employee);

        return "User Registered Successfully";
    }

    public String login(LoginRequest request) {

        Employee employee = employeeRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        boolean matches = passwordEncoder.matches(
                request.getPassword(),
                employee.getPassword()
        );

        if (!matches) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtUtil.generateToken(employee.getEmail());
    }
}
