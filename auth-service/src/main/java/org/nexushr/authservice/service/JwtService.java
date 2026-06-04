package org.nexushr.authservice.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.nexushr.authservice.exception.InvalidTokenException;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {
    private static final String SECRET =
            "THIS_IS_MY_SECRET_KEY_FOR_NEXUSHR_PROJECT_2026";

    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    private static final long ACCESS_TOKEN_EXPIRATION = 1000 * 60 * 15;

    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis()
                        + ACCESS_TOKEN_EXPIRATION))
                .signWith(key)
                .compact();
    }

    public String extractUsername(String token) {

        try {
            return Jwts.parser()
                    .verifyWith((javax.crypto.SecretKey) key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();
        } catch (MalformedJwtException e) {
            throw new InvalidTokenException("Invalid token format: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            throw new InvalidTokenException("Token has expired: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            throw new InvalidTokenException("Token is not supported: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            throw new InvalidTokenException("Token is empty or null: " + e.getMessage());
        }
    }

    public boolean isTokenValid(String token) {

        try {
            extractUsername(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
