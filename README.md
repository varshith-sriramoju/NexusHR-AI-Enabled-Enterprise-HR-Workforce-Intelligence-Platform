# NexusHR

NexusHR is a microservices-based HR management platform built with Java 21, Spring Boot, Maven, PostgreSQL, Spring Security, and Spring Cloud Gateway.

## Services

- `api-gateway` — single entry point for all client requests
- `auth-service` — authentication, authorization, JWT, refresh tokens
- `employee-service` — employee management and master data
- `payroll-service` — payroll processing and salary-related features

## Current Stack

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- Flyway
- Maven multi-module architecture

## Repository Structure

```text
nexusHR/
├── api-gateway/
├── auth-service/
├── employee-service/
├── payroll-service/
├── pom.xml
└── README.md
```

## Local Ports

- `api-gateway` — `8080`
- `auth-service` — `8081`
- `employee-service` — `8082`
- `payroll-service` — `8083`

## How to Run

Run each service from its own folder:

```bash
mvnw.cmd spring-boot:run
```

Or build first and then run the generated JAR:

```bash
mvnw.cmd clean package -DskipTests
```

## Database

- PostgreSQL is used for service persistence.
- Flyway is used for schema migrations where configured.

## API Documentation

- Postman collections are stored in the `postman/` folder.
- Service endpoints will be documented in each service README.

## Development Notes

- This README will be updated on major milestones and project completion.
- Each service has its own README for service-specific setup and API details.

## Project Update Log

- Updates will be added when a major milestone or project phase is completed.

