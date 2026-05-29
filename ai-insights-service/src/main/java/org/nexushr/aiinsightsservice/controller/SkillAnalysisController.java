package org.nexushr.aiinsightsservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.aiinsightsservice.dto.SkillGapResponse;
import org.nexushr.aiinsightsservice.service.SkillGapAnalysisService;
import org.nexushr.aiinsightsservice.service.SkillRecommendationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai/skills")
@RequiredArgsConstructor

public class SkillAnalysisController {

    private final SkillGapAnalysisService skillGapService;
    private final SkillRecommendationService recommendationService;

    @GetMapping("/{employeeId}/{role}")
    public ResponseEntity<SkillGapResponse> analyze(
            @PathVariable Long employeeId,
            @PathVariable String role) {

        return ResponseEntity.ok(
                skillGapService.analyzeSkillGap(employeeId, role));
    }

    @GetMapping("/recommendations")
    public List<String> recommendations(
            @RequestParam List<String> skills) {

        return recommendationService.generateRecommendations(skills);
    }
}
