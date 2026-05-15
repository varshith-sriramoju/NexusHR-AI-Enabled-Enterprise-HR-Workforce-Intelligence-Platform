package org.nexushr.employeeservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.dto.LeaveRequestDto;
import org.nexushr.employeeservice.entity.Leave;
import org.nexushr.employeeservice.service.LeaveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@RequiredArgsConstructor
public class LeaveController {

    private final LeaveService leaveService;

    @PostMapping("/apply")
    public Leave applyLeave(@RequestBody LeaveRequestDto dto) {
        return leaveService.applyLeave(dto);
    }

    @PutMapping("/{id}/approve")
    public Leave approveLeave(@PathVariable Long id) {
        return leaveService.approveLeave(id);
    }

    @PutMapping("/{id}/reject")
    public Leave rejectLeave(@PathVariable Long id) {
        return leaveService.rejectLeave(id);
    }

    @GetMapping("/employee/{employeeId}")
    public List<Leave> getEmployeeLeaves(@PathVariable Long employeeId) {
        return leaveService.getEmployeeLeaves(employeeId);
    }
}