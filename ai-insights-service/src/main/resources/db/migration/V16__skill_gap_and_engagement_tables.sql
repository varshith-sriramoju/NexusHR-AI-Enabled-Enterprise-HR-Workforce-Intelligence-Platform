CREATE TABLE employee_skills (
                                 id BIGSERIAL PRIMARY KEY,
                                 employee_id BIGINT,
                                 skill_name VARCHAR(100),
                                 proficiency INTEGER
);

CREATE TABLE role_required_skills (
                                      id BIGSERIAL PRIMARY KEY,
                                      role_name VARCHAR(100),
                                      skill_name VARCHAR(100)
);