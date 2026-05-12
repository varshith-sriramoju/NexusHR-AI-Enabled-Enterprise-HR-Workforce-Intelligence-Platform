# auth-service

The `auth-service` handles authentication and authorization for NexusHR.

## Purpose

- Register users/employees
- Login and issue JWT access tokens
- Refresh access tokens
- Manage security-related logic

## Port

- `8081`

## Technology

- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT
- Flyway

## Run

From the `auth-service` folder:

```bash
mvnw.cmd spring-boot:run
```

## Current Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout/{userId}`

## Notes

- Security and JWT flow will be refined as milestones are completed.
- Database schema and request/response models may evolve as features are added.

