CREATE TABLE payroll (
                         id BIGSERIAL PRIMARY KEY,
                         employee_id BIGINT,
                         base_salary DOUBLE PRECISION,
                         bonus DOUBLE PRECISION,
                         deductions DOUBLE PRECISION,
                         tax DOUBLE PRECISION,
                         net_salary DOUBLE PRECISION,
                         pay_date DATE
);