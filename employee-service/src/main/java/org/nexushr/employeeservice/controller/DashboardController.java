package org.nexushr.employeeservice.controller;

import org.nexushr.employeeservice.dto.DashboardStatsDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @GetMapping("/stats")
    public DashboardStatsDto getStats() {

        return new DashboardStatsDto(
                120,
                98,
                5,
                450000
        );
    }
}