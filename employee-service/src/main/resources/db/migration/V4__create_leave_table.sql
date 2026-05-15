CREATE TABLE leaves (
                        id BIGSERIAL PRIMARY KEY,
                        employee_id BIGINT NOT NULL,
                        leave_type VARCHAR(30),
                        start_date DATE,
                        end_date DATE,
                        reason TEXT,
                        status VARCHAR(30)
);