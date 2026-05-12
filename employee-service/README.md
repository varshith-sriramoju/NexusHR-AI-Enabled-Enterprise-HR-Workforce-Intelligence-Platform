# employee-service

The `employee-service` manages employee master data for NexusHR.

## Purpose

- Maintain employee records
- Store department and role data
- Support HR-related employee operations

## Port

- `8082`

## Technology

- Spring Boot
- Spring Data JPA
- PostgreSQL
- Flyway
- Validation

## Run

From the `employee-service` folder:

```bash
mvnw.cmd spring-boot:run
```

## Database

- Flyway migrations are located in:

```text
src/main/resources/db/migration
```

## Current Status

- Flyway-based schema creation is being used
- Schema and entity mappings will be updated as the service grows

## Notes

- This README will be updated when employee-service milestones are completed.

