package org.nexushr.aiinsightsservice.service;

import org.springframework.stereotype.Service;

@Service
public class EngagementScoringService {

    public double calculateEngagementScore(
            double attendance,
            double performance,
            double feedback,
            double taskCompletion) {

        return
                (attendance * 0.3)
                        + (performance * 0.3)
                        + (feedback * 0.2)
                        + (taskCompletion * 0.2);
    }
    public String getEngagementLevel(double score) {

        if(score >= 85)
            return "HIGH";

        if(score >= 60)
            return "MEDIUM";

        return "LOW";
    }
}
