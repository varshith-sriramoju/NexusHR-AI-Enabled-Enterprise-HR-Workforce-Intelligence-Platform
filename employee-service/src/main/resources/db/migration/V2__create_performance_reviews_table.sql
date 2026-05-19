CREATE TABLE performance_reviews (

                                     id BIGSERIAL PRIMARY KEY,

                                     employee_id BIGINT NOT NULL,

                                     reviewer_name VARCHAR(255) NOT NULL,

                                     communication_rating INT CHECK (communication_rating BETWEEN 1 AND 5),

                                     technical_rating INT CHECK (technical_rating BETWEEN 1 AND 5),

                                     teamwork_rating INT CHECK (teamwork_rating BETWEEN 1 AND 5),

                                     overall_rating INT CHECK (overall_rating BETWEEN 1 AND 5),

                                     feedback TEXT,

                                     review_date DATE NOT NULL,

                                     CONSTRAINT fk_employee
                                         FOREIGN KEY(employee_id)
                                             REFERENCES employees(id)
                                             ON DELETE CASCADE
);