package org.nexushr.authservice.controller;

import org.nexushr.authservice.dto.LoginRequest;
import org.nexushr.authservice.dto.RegisterRequest;
import org.nexushr.authservice.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request
    ) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public String login(
            @RequestBody LoginRequest request
    ) {

        return authService.login(request);
    }
}
