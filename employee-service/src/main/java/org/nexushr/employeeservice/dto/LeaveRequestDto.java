package org.nexushr.employeeservice.dto;

import lombok.Data;
import org.nexushr.employeeservice.enums.LeaveType;

import java.time.LocalDate;

@Data
public class LeaveRequestDto {

    private Long employeeId;

    private LeaveType leaveType;

    private LocalDate startDate;

    private LocalDate endDate;

    private String reason;
}