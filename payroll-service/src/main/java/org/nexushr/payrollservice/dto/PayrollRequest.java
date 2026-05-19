package org.nexushr.payrollservice.dto;

import lombok.Data;

@Data
public class PayrollRequest {

    private Long employeeId;
    private Double baseSalary;
    private Double bonus;
    private Double deductions;
}