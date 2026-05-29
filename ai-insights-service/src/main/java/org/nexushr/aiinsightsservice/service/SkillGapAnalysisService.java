package org.nexushr.aiinsightsservice.service;

import lombok.RequiredArgsConstructor;
import org.nexushr.aiinsightsservice.dto.SkillGapResponse;
import org.nexushr.aiinsightsservice.entity.RoleSkill;
import org.nexushr.aiinsightsservice.entity.Skill;
import org.nexushr.aiinsightsservice.repository.EmployeeSkillRepository;
import org.nexushr.aiinsightsservice.repository.RoleRequiredSkillRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SkillGapAnalysisService {

    private final EmployeeSkillRepository employeeSkillRepository;
    private final RoleRequiredSkillRepository roleSkillRepository;

    public SkillGapResponse analyzeSkillGap(
            Long employeeId,
            String roleName) {

        List<Skill> employeeSkills =
                employeeSkillRepository.findByEmployeeId(employeeId);

        List<RoleSkill> requiredSkills =
                roleSkillRepository.findByRoleName(roleName);

        Set<String> employeeSkillSet =
                employeeSkills.stream()
                        .map(Skill::getSkillName)
                        .collect(Collectors.toSet());

        Set<String> requiredSkillSet =
                requiredSkills.stream()
                        .map(RoleSkill::getSkillName)
                        .collect(Collectors.toSet());

        List<String> missingSkills = requiredSkillSet.stream()
                        .filter(skill -> !employeeSkillSet.contains(skill))
                        .toList();

        double matchPercentage = 0;

        if(!requiredSkillSet.isEmpty()) {

            matchPercentage =
                    ((double)(requiredSkillSet.size()
                            - missingSkills.size())
                            / requiredSkillSet.size()) * 100;
        }

        SkillGapResponse response = new SkillGapResponse();

        response.setExistingSkills(
                new ArrayList<>(employeeSkillSet));

        response.setMissingSkills(missingSkills);

        response.setSkillMatchPercentage(matchPercentage);

        return response;
    }
}
