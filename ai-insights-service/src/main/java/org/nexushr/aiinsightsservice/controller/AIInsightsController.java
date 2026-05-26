package org.nexushr.aiinsightsservice.controller;

import org.nexushr.aiinsightsservice.dto.AttritionRequest;
import org.nexushr.aiinsightsservice.service.AttritionPredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai")
public class AIInsightsController {

    @Autowired
    private AttritionPredictionService service;

    @PostMapping("/attrition")
    public ResponseEntity<String> predict(
            @RequestBody AttritionRequest request) {

        return ResponseEntity.ok(
                service.predictRisk(request)
        );
    }
}
