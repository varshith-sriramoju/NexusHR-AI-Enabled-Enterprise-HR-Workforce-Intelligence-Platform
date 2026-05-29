package org.nexushr.aiinsightsservice.controller;



import lombok.RequiredArgsConstructor;

import org.nexushr.aiinsightsservice.service
        .RecommendationService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ai/recommendations")
@RequiredArgsConstructor
public class AIRecommendationController {

    private final RecommendationService
            recommendationService;

    @GetMapping
    public List<String> getRecommendations(

            @RequestParam List<String> skills) {

        return recommendationService
                .generateRecommendations(skills);
    }
}
