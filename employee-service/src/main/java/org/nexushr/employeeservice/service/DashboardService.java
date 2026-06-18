package org.nexushr.employeeservice.service;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.dto.DashboardStatsDto;
import org.nexushr.employeeservice.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final EmployeeRepository employeeRepository;
    public DashboardStatsDto getStats(){
        long totalEmployees=employeeRepository.count();
        long activeEmployees=employeeRepository.countByStatus("ACTIVE");
        long departments=5;
        long attendenceToday=120;
        return new DashboardStatsDto(totalEmployees, activeEmployees, departments, attendenceToday);
    }
}
