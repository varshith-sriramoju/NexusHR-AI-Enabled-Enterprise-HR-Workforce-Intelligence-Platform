package org.nexushr.employeeservice.service;

import org.nexushr.employeeservice.dto.AttendanceRequest;
import org.nexushr.employeeservice.entity.Attendance;
import org.nexushr.employeeservice.entity.AttendanceStatus;
import org.nexushr.employeeservice.repository.AttendanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public Attendance checkIn(AttendanceRequest request) {

        Attendance attendance = Attendance.builder()
                .employeeId(request.getEmployeeId())
                .date(LocalDate.now())
                .checkIn(LocalDateTime.now())
                .status(AttendanceStatus.PRESENT)
                .build();

        return attendanceRepository.save(attendance);
    }

    public Attendance checkOut(Long attendanceId) {

        Attendance attendance =
                attendanceRepository.findById(attendanceId)
                        .orElseThrow();

        attendance.setCheckOut(LocalDateTime.now());

        return attendanceRepository.save(attendance);
    }

    @Cacheable(value = "attendance")
    public Attendance getAttendance(Long id) {
        return attendanceRepository.findById(id)
                .orElseThrow();
    }
}