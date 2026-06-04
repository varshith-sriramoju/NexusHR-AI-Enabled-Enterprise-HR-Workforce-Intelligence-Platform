package org.nexushr.authservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.authservice.dto.*;
import org.nexushr.authservice.repository.RefreshTokenRepository;
import org.nexushr.authservice.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;
    private final RefreshTokenRepository refreshTokenRepository;

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }

    @PostMapping("/refresh")
    public AuthResponse refresh(
            @RequestBody RefreshTokenRequest request) {

        return authService.refreshToken(request);
    }

    @PostMapping("/logout/{userId}")
    public String logout(@PathVariable Long userId) {

        refreshTokenRepository.deleteByUserId(userId);

        return "Logged Out Successfully";
    }

    @GetMapping("/test")
    public String test() {
        return "AUTH WORKING";
    }
}