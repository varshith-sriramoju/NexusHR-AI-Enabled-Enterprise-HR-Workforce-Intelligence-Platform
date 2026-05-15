# employee-service

`employee-service` handles employee and HR domain operations in NexusHR.

## Port

- `8082`

## Tech Stack

- Spring Boot
- Spring Data JPA
- PostgreSQL
- Flyway
- Validation
- Redis (as configured)

## Configuration

- Primary config file: `src/main/resources/application.yml`
- Keep `src/main/resources/application.properties` empty (or remove it) for YAML-only config.

Current key config areas:
- server port
- datasource (PostgreSQL)
- JPA (`ddl-auto: validate`)
- Flyway migration location
- Redis host/port
- JWT secret

## Run

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\employee-service"
mvnw.cmd spring-boot:run
```

## Build and Test

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\employee-service"
mvnw.cmd clean install
```

## Database and Flyway

- Database: PostgreSQL
- Migration folder:

```text
src/main/resources/db/migration
```

## API

Common employee endpoints (subject to current controllers):
- `POST /api/employees`
- `GET /api/employees`
- `GET /api/employees/{id}`
- `DELETE /api/employees/{id}`

## Troubleshooting

- `500 Internal Server Error` usually indicates DB connectivity, migration failure, or schema mismatch.
- Confirm PostgreSQL is running and credentials in `application.yml` are correct.

