package org.nexushr.aiinsightsservice.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationService {

    public List<String> generateRecommendations(
            List<String> missingSkills) {

        List<String> recommendations = new ArrayList<>();

        for(String skill : missingSkills) {

            recommendations.add(
                    "Complete certification for " + skill);

            recommendations.add(
                    "Attend workshop on " + skill);
        }

        return recommendations;
    }
}
