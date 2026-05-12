CREATE TABLE departments (
                             id BIGSERIAL PRIMARY KEY,
                             name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE roles (
                       id BIGSERIAL PRIMARY KEY,
                       name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE employees (
                           id BIGSERIAL PRIMARY KEY,

                           first_name VARCHAR(100) NOT NULL,
                           last_name VARCHAR(100),

                           email VARCHAR(150) UNIQUE NOT NULL,
                           phone VARCHAR(20),

                           position VARCHAR(100),

                           salary DECIMAL(10,2),

                           department_id BIGINT,
                           role_id BIGINT,

                           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                           CONSTRAINT fk_department
                               FOREIGN KEY(department_id)
                                   REFERENCES departments(id),

                           CONSTRAINT fk_role
                               FOREIGN KEY(role_id)
                                   REFERENCES roles(id)
);