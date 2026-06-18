package org.nexushr.payrollservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PayrollSummaryDTO {

    private double totalPayroll;
    private long processedEmployees;
}