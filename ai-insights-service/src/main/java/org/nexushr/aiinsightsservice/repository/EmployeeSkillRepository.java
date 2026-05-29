package org.nexushr.aiinsightsservice.repository;

import org.nexushr.aiinsightsservice.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeSkillRepository
        extends JpaRepository<Skill, Long> {

    List<Skill> findByEmployeeId(Long employeeId);
}

