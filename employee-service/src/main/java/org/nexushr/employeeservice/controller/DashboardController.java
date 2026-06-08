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