# api-gateway

`api-gateway` is the single entry point for NexusHR microservices.

## Port

- `8080`

## Tech Stack

- Spring Boot
- Spring Cloud Gateway

## Configuration

- Primary config file: `src/main/resources/application.yml`
- Keep `src/main/resources/application.properties` empty (or remove it) for YAML-only config.

Current gateway route configuration includes:
- `/api/auth/**` -> `http://localhost:8081`

Logging configured:
- `org.springframework.cloud.gateway: DEBUG`

## Run

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\api-gateway"
mvnw.cmd spring-boot:run
```

## Build and Test

```powershell
cd "D:\CODE\1\NexusHR\nexusHR\api-gateway"
mvnw.cmd clean install
```

## Extending Routes

Add new route blocks in `application.yml` under:

```yaml
spring:
  cloud:
	gateway:
	  routes:
```

Then restart gateway to apply changes.

