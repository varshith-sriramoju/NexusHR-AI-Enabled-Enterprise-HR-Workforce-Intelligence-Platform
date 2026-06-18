package org.nexushr.employeeservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.dto.DashboardStatsDto;
import org.nexushr.employeeservice.service.DashboardService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/stats")
    public DashboardStatsDto getStats() {
        return dashboardService.getStats();
    }

    @GetMapping("/departments")
    public List<Map<String, Object>> getDepartments() {
        return List.of(
                Map.of(
                        "name", "Engineering",
                        "employees", 45,
                        "growth", "+4%",
                        "avatar", "E"
                ),
                Map.of(
                        "name", "Sales",
                        "employees", 32,
                        "growth", "+2%",
                        "avatar", "S"
                ),
                Map.of(
                        "name", "HR",
                        "employees", 18,
                        "growth", "-1%",
                        "avatar", "H"
                )
        );
    }

    @GetMapping("/activities")
    public List<Map<String, Object>> getActivities() {
        return List.of(
                Map.of(
                        "user", "Alice Johnson",
                        "action", "Submitted leave request",
                        "time", "2 hours ago",
                        "icon", "user"
                ),
                Map.of(
                        "user", "Bob Smith",
                        "action", "Completed performance review",
                        "time", "Yesterday",
                        "icon", "report"
                ),
                Map.of(
                        "user", "Carlos Vega",
                        "action", "Updated attendance",
                        "time", "3 days ago",
                        "icon", "clock"
                )
        );
    }
}
