package org.nexushr.employeeservice.controller;

import org.nexushr.employeeservice.dto.PerformanceReviewRequest;
import org.nexushr.employeeservice.entity.PerformanceReview;
import org.nexushr.employeeservice.service.PerformanceReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/performance")
@RequiredArgsConstructor
public class PerformanceReviewController {

    private final PerformanceReviewService service;

    @PostMapping
    public PerformanceReview createReview(
            @Valid @RequestBody PerformanceReviewRequest request) {

        return service.createReview(request);
    }

    @GetMapping("/{employeeId}")
    public List<PerformanceReview> getReviews(
            @PathVariable Long employeeId) {

        return service.getEmployeeReviews(employeeId);
    }

}