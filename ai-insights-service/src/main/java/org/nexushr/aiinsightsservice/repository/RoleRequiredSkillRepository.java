package org.nexushr.aiinsightsservice.repository;

import org.nexushr.aiinsightsservice.entity.RoleSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRequiredSkillRepository
        extends JpaRepository<RoleSkill, Long> {

    List<RoleSkill> findByRoleName(String roleName);
}
