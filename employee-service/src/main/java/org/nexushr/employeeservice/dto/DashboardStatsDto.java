package org.nexushr.employeeservice.dto;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardStatsDto {

    private long totalEmployees;
    private long presentToday;
    private long pendingLeaves;
    private double monthlyPayroll;


}
