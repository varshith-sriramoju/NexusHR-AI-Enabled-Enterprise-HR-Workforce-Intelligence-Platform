package org.nexushr.employeeservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.client.NotificationClient;
import org.nexushr.employeeservice.dto.LeaveRequestDto;
import org.nexushr.employeeservice.dto.NotificationRequest;
import org.nexushr.employeeservice.entity.Employee;
import org.nexushr.employeeservice.entity.Leave;
import org.nexushr.employeeservice.enums.LeaveStatus;
import org.nexushr.employeeservice.repository.EmployeeRepository;
import org.nexushr.employeeservice.repository.LeaveRepository;
import org.nexushr.employeeservice.service.LeaveService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;
    private final EmployeeRepository employeeRepository;
    private final NotificationClient notificationClient;

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
        Leave savedLeave = leaveRepository.save(leave);
        //send notification
        Employee employee=employeeRepository.findById(savedLeave.getEmployeeId()).
                orElseThrow(() -> new RuntimeException("Employee not found"));
        notificationClient.sendEmail(new NotificationRequest(employee.getEmail(), "Leave Approved", "Your leave has been approved"));
        return savedLeave;
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