# auth-service

`auth-service` provides authentication and authorization for NexusHR.

## Port

- `8081`

## Tech Stack

- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT
- Flyway

## Run

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\auth-service"
mvnw.cmd spring-boot:run
```

## Build and Test

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\auth-service"
mvnw.cmd clean install
```

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout/{userId}`

## Security Rules

Current rules include role checks for leave workflow endpoints:
- `/api/leaves/apply` -> `EMPLOYEE` or `ADMIN`
- `/api/leaves/*/approve` -> `ADMIN`
- `/api/leaves/*/reject` -> `ADMIN`

## Notes

- JWT and authorization flows should be updated alongside API/gateway changes.

