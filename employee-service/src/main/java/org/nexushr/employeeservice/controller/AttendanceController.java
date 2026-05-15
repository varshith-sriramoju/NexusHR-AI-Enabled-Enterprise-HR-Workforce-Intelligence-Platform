package org.nexushr.employeeservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.employeeservice.dto.AttendanceRequest;
import org.nexushr.employeeservice.entity.Attendance;
import org.nexushr.employeeservice.service.AttendanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor
public class AttendanceController {

    private final AttendanceService attendanceService;

    @PostMapping("/check-in")
    public Attendance checkIn(
            @RequestBody AttendanceRequest request
    ) {
        return attendanceService.checkIn(request);
    }

    @PutMapping("/check-out/{id}")
    public Attendance checkOut(@PathVariable Long id) {
        return attendanceService.checkOut(id);
    }

    @GetMapping("/{id}")
    public Attendance getAttendance(@PathVariable Long id) {
        return attendanceService.getAttendance(id);
    }
}