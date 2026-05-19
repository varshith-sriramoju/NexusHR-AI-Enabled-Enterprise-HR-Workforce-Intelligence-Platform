package org.nexushr.employeeservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    @GetMapping("/stats")
    public List<Map<String, Object>> getStats() {

        return List.of(
                Map.of(
                        "label", "Total Employees",
                        "value", "254",
                        "change", "+5.2%",
                        "trend", "up"
                ),
                Map.of(
                        "label", "Present Today",
                        "value", "238",
                        "change", "+2.1%",
                        "trend", "up"
                )
        );
    }
}