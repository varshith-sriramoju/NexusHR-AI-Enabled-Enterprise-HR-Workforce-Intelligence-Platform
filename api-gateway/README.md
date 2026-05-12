# api-gateway

The `api-gateway` service is the single entry point for the NexusHR microservices system.

## Purpose

- Route external client requests to internal services
- Centralize request handling
- Support future cross-cutting concerns such as authentication, rate limiting, and logging

## Port

- `8080`

## Technology

- Spring Boot
- Spring Cloud Gateway

## Run

From the `api-gateway` folder:

```bash
mvnw.cmd spring-boot:run
```

## Planned Responsibilities

- Route `/api/auth/**` to `auth-service`
- Route employee APIs to `employee-service`
- Route payroll APIs to `payroll-service`

## Notes

- This file will be updated when gateway milestones are completed.

