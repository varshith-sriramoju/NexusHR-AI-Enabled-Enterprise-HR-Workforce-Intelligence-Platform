CREATE TABLE attendance (
                            id BIGSERIAL PRIMARY KEY,
                            employee_id BIGINT NOT NULL,
                            date DATE,
                            check_in TIMESTAMP,
                            check_out TIMESTAMP,
                            status VARCHAR(20)
);