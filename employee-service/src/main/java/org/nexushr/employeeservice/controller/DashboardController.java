package org.nexushr.employeeservice.controller;

import org.nexushr.employeeservice.dto.DashboardStatsDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @GetMapping("/stats")
    public List<Map<String, Object>> getStats() {

        return List.of(

                Map.of(
                        "label", "Employees",
                        "value", 120,
                        "change", "+12%",
                        "trend", "up",
                        "icon", "employees",
                        "color", "from-blue-500 to-blue-600"
                ),

                Map.of(
                        "label", "Attendance",
                        "value", "95%",
                        "change", "+3%",
                        "trend", "up",
                        "icon", "attendance",
                        "color", "from-teal-500 to-teal-600"
                ),

                Map.of(
                        "label", "Payroll",
                        "value", "$45K",
                        "change", "+8%",
                        "trend", "up",
                        "icon", "payroll",
                        "color", "from-cyan-500 to-cyan-600"
                ),

                Map.of(
                        "label", "New Hires",
                        "value", 18,
                        "change", "+5%",
                        "trend", "up",
                        "icon", "hires",
                        "color", "from-emerald-500 to-emerald-600"
                )
        );
    }
}