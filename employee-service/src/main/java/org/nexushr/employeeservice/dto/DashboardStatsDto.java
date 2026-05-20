package org.nexushr.employeeservice.dto;



public class DashboardStatsDto {

    private long totalEmployees;
    private long presentToday;
    private long pendingLeaves;
    private double monthlyPayroll;

    public DashboardStatsDto(
            long totalEmployees,
            long presentToday,
            long pendingLeaves,
            double monthlyPayroll
    ) {
        this.totalEmployees = totalEmployees;
        this.presentToday = presentToday;
        this.pendingLeaves = pendingLeaves;
        this.monthlyPayroll = monthlyPayroll;
    }

    public long getTotalEmployees() {
        return totalEmployees;
    }

    public long getPresentToday() {
        return presentToday;
    }

    public long getPendingLeaves() {
        return pendingLeaves;
    }

    public double getMonthlyPayroll() {
        return monthlyPayroll;
    }
}
