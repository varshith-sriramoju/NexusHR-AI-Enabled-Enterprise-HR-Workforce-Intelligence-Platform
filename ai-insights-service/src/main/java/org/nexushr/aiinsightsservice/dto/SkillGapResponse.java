package org.nexushr.aiinsightsservice.dto;

import java.util.List;
import lombok.*;

@Getter
    @Setter
    @NoArgsConstructor
public class SkillGapResponse {

    private List<String> existingSkills;

    private List<String> missingSkills;

    private Double skillMatchPercentage;
}
