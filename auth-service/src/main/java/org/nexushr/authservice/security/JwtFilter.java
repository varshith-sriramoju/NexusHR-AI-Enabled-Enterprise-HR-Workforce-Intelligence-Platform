package org.nexushr.authservice.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.nexushr.authservice.entity.Employee;
import org.nexushr.authservice.repository.EmployeeRepository;
import org.nexushr.authservice.service.JwtService;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final EmployeeRepository employeeRepository;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

        String path = request.getServletPath();

        // Skip auth APIs
        if (path.startsWith("/api/auth")) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

        // No token
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {

            String token = authHeader.substring(7);

            // Validate token
            if (jwtService.isTokenValid(token)) {

                String email = jwtService.extractUsername(token);

                Optional<Employee> optionalEmployee =
                        employeeRepository.findByEmail(email);

                if (optionalEmployee.isPresent()) {

                    Employee employee = optionalEmployee.get();

                    List<SimpleGrantedAuthority> authorities =
                            List.of(
                                    new SimpleGrantedAuthority(
                                            "ROLE_" + employee.getRole().name()
                                    )
                            );

                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    employee,
                                    null,
                                    authorities
                            );

                    SecurityContextHolder
                            .getContext()
                            .setAuthentication(authToken);
                }
            }

        } catch (Exception e) {

            // Clear context if token invalid
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }
}