package org.nexushr.employeeservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.dto.LeaveRequestDto;
import org.nexushr.employeeservice.entity.Leave;
import org.nexushr.employeeservice.enums.LeaveStatus;
import org.nexushr.employeeservice.repository.LeaveRepository;
import org.nexushr.employeeservice.service.LeaveService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;

    @Override
    public Leave applyLeave(LeaveRequestDto dto) {

        Leave leave = Leave.builder()
                .employeeId(dto.getEmployeeId())
                .leaveType(dto.getLeaveType())
                .startDate(dto.getStartDate())
                .endDate(dto.getEndDate())
                .reason(dto.getReason())
                .status(LeaveStatus.PENDING)
                .build();

        return leaveRepository.save(leave);
    }

    @Override
    public Leave approveLeave(Long leaveId) {

        Leave leave = leaveRepository.findById(leaveId)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRepository.save(leave);
    }

    @Override
    public Leave rejectLeave(Long leaveId) {

        Leave leave = leaveRepository.findById(leaveId)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        leave.setStatus(LeaveStatus.REJECTED);

        return leaveRepository.save(leave);
    }

    @Override
    public List<Leave> getEmployeeLeaves(Long employeeId) {
        return leaveRepository.findByEmployeeId(employeeId);
    }
}