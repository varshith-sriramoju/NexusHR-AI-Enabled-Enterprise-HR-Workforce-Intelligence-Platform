package org.nexushr.aiinsightsservice.dto;

import lombok.Data;
@Data
public class AttritionRequest {

    private String employeeName;
    private int attendancePercentage;
    private int leaveCount;
    private double performanceScore;
    private int overtimeHours;
    private String department;

}
