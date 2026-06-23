package org.nexushr.employeeservice.service;

import org.nexushr.employeeservice.dto.LeaveRequestDto;
import org.nexushr.employeeservice.entity.Leave;
import java.util.List;

public interface LeaveService {

    Leave applyLeave(LeaveRequestDto dto);

    Leave approveLeave(Long leaveId);

    Leave rejectLeave(Long leaveId);

    List<Leave> getEmployeeLeaves(Long employeeId);

}