# Auth Service Exception Handling Documentation

## Overview
Comprehensive exception handling system implemented for the Auth Service with custom exceptions, global exception handler, and standardized error responses.

## Project Structure

```
auth-service/src/main/java/org/nexushr/authservice/
├── exception/ (NEW PACKAGE)
│   ├── UserNotFoundException.java
│   ├── InvalidPasswordException.java
│   ├── RefreshTokenNotFoundException.java
│   ├── RefreshTokenExpiredException.java
│   ├── UserAlreadyExistsException.java
│   └── InvalidTokenException.java
├── config/
│   └── GlobalExceptionHandler.java (UPDATED)
├── dto/
│   └── ErrorResponse.java (UPDATED)
├── service/
│   ├── AuthService.java (UPDATED)
│   └── JwtService.java (UPDATED)
└── controller/
    └── AuthController.java (NO CHANGES NEEDED)
```

## Custom Exceptions

### 1. UserNotFoundException
- **Thrown when**: User email not found during login
- **HTTP Status**: 404 NOT_FOUND
- **Error Code**: USER_NOT_FOUND

### 2. InvalidPasswordException
- **Thrown when**: Password doesn't match the stored password
- **HTTP Status**: 401 UNAUTHORIZED
- **Error Code**: INVALID_PASSWORD

### 3. UserAlreadyExistsException
- **Thrown when**: Attempting to register with an email that already exists
- **HTTP Status**: 409 CONFLICT
- **Error Code**: USER_ALREADY_EXISTS

### 4. RefreshTokenNotFoundException
- **Thrown when**: Refresh token not found in the database
- **HTTP Status**: 404 NOT_FOUND
- **Error Code**: REFRESH_TOKEN_NOT_FOUND

### 5. RefreshTokenExpiredException
- **Thrown when**: Refresh token has expired
- **HTTP Status**: 401 UNAUTHORIZED
- **Error Code**: REFRESH_TOKEN_EXPIRED

### 6. InvalidTokenException
- **Thrown when**: JWT token is malformed, expired, or invalid
- **HTTP Status**: 401 UNAUTHORIZED
- **Error Code**: INVALID_TOKEN

## Error Response Structure

All error responses follow this standard format:

```json
{
  "status": 404,
  "error": "USER_NOT_FOUND",
  "message": "User with email: user@example.com not found",
  "path": "/api/auth/login",
  "timestamp": "2026-06-04T10:30:45"
}
```

## Global Exception Handler

**File**: `config/GlobalExceptionHandler.java`

Features:
- `@RestControllerAdvice` annotation for centralized exception handling
- Separate handler methods for each custom exception
- Fallback handler for unexpected exceptions
- Standardized error response format
- Includes request path and timestamp for debugging

## Service Updates

### AuthService Changes

#### register() method
```
OLD: No duplicate user check
NEW: Checks if user already exists → throws UserAlreadyExistsException
```

#### login() method
```
OLD: Generic orElseThrow() → throws NoSuchElementException
NEW: Throws UserNotFoundException with descriptive message

OLD: throw new RuntimeException("Invalid Password")
NEW: Throws InvalidPasswordException
```

#### refreshToken() method
```
OLD: Generic orElseThrow() → throws NoSuchElementException
NEW: Throws RefreshTokenNotFoundException with descriptive message

OLD: throw new RuntimeException("Refresh Token Expired")
NEW: Throws RefreshTokenExpiredException with descriptive message
```

### JwtService Changes

#### extractUsername() method
```
Enhanced with comprehensive exception handling:
- MalformedJwtException → InvalidTokenException
- ExpiredJwtException → InvalidTokenException
- UnsupportedJwtException → InvalidTokenException
- IllegalArgumentException → InvalidTokenException
```

## API Endpoints & Example Responses

### 1. Register - User Already Exists
```
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "EMPLOYEE"
}

Response (409 CONFLICT):
{
  "status": 409,
  "error": "USER_ALREADY_EXISTS",
  "message": "User with email: john@example.com already exists",
  "path": "/api/auth/register",
  "timestamp": "2026-06-04T10:30:45"
}
```

### 2. Login - User Not Found
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "nonexistent@example.com",
  "password": "password123"
}

Response (404 NOT_FOUND):
{
  "status": 404,
  "error": "USER_NOT_FOUND",
  "message": "User with email: nonexistent@example.com not found",
  "path": "/api/auth/login",
  "timestamp": "2026-06-04T10:30:45"
}
```

### 3. Login - Invalid Password
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "wrongpassword"
}

Response (401 UNAUTHORIZED):
{
  "status": 401,
  "error": "INVALID_PASSWORD",
  "message": "Invalid password provided",
  "path": "/api/auth/login",
  "timestamp": "2026-06-04T10:30:45"
}
```

### 4. Refresh Token - Token Not Found
```
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "invalid-token-id"
}

Response (404 NOT_FOUND):
{
  "status": 404,
  "error": "REFRESH_TOKEN_NOT_FOUND",
  "message": "Refresh token not found",
  "path": "/api/auth/refresh",
  "timestamp": "2026-06-04T10:30:45"
}
```

### 5. Refresh Token - Token Expired
```
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "expired-token-id"
}

Response (401 UNAUTHORIZED):
{
  "status": 401,
  "error": "REFRESH_TOKEN_EXPIRED",
  "message": "Refresh token has expired",
  "path": "/api/auth/refresh",
  "timestamp": "2026-06-04T10:30:45"
}
```

## Best Practices Implemented

1. **Specific Exceptions**: Each scenario has a dedicated exception class
2. **Descriptive Messages**: Error messages include relevant context (e.g., email address)
3. **Appropriate HTTP Status Codes**: Follows REST conventions
4. **Centralized Handling**: All exceptions handled in one place
5. **Standardized Response Format**: Consistent structure across all errors
6. **Request Tracking**: Includes path and timestamp for debugging
7. **Graceful Degradation**: Fallback handler for unexpected errors

## Testing Recommendations

1. Test registration with duplicate email
2. Test login with non-existent user
3. Test login with incorrect password
4. Test refresh token with expired token
5. Test JWT token validation with malformed token
6. Test API with invalid request bodies

## Future Enhancements

1. Add validation error handling for invalid request payloads
2. Implement rate limiting for failed login attempts
3. Add logging for all exceptions
4. Add custom error codes for client-side handling
5. Implement exception retry mechanisms where appropriate

