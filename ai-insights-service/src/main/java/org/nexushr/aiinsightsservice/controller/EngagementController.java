package org.nexushr.aiinsightsservice.controller;




import lombok.RequiredArgsConstructor;

import org.nexushr.aiinsightsservice.service.EngagementScoringService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai/engagement")
@RequiredArgsConstructor

public class EngagementController {

    private final EngagementScoringService service;

    @GetMapping("/score")
    public Double score(

            @RequestParam double attendance,

            @RequestParam double performance,

            @RequestParam double feedback,

            @RequestParam double taskCompletion) {

        return service.calculateEngagementScore(
                attendance,
                performance,
                feedback,
                taskCompletion);
    }
}
