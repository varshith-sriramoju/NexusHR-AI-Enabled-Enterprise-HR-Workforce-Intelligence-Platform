# NexusHR

NexusHR is a microservices-based HR management platform.

## Tech Stack

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Spring Cloud Gateway
- PostgreSQL
- Flyway
- Maven (multi-module)

## Services

| Service | Port | Purpose |
|---|---:|---|
| `api-gateway` | `8080` | Entry point and request routing |
| `auth-service` | `8081` | Authentication, JWT, authorization |
| `employee-service` | `8082` | Employee and HR domain operations |
| `payroll-service` | `8083` | Payroll processing |

## Repository Structure

```text
nexusHR/
├── api-gateway/
├── auth-service/
├── employee-service/
├── payroll-service/
├── postman/
├── pom.xml
└── README.md
```

## Prerequisites

- JDK 21
- Maven 3.9+
- PostgreSQL (running)
- Redis (only where configured)

## Build

From project root:

```powershell
cd "D:\CODE\1\NexusHR\nexusHR"
mvn clean install
```

## Run Services

Start each service in a separate terminal:

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\auth-service"
mvnw.cmd spring-boot:run
```

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\employee-service"
mvnw.cmd spring-boot:run
```

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\payroll-service"
mvnw.cmd spring-boot:run
```

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\api-gateway"
mvnw.cmd spring-boot:run
```

## Configuration

- Service configuration is maintained in `application.yml`.
- Keep `application.properties` empty (or remove it) when using YAML-only configuration.

## Database and Migrations

- PostgreSQL is used for persistence.
- Flyway migrations are used where enabled.
- Typical migration path: `src/main/resources/db/migration`.

## API and Testing Resources

- Postman assets are in `postman/` (`collections`, `environments`, `flows`, `mocks`, `specs`).

## Notes

- Update each service README when endpoints, security rules, or routes change.

