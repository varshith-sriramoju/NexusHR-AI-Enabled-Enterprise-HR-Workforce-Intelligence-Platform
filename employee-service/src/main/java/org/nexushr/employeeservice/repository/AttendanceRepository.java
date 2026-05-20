package org.nexushr.employeeservice.repository;

import org.nexushr.employeeservice.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {
    List<Attendance> findByStatus(String status);
    Optional<Attendance> findByEmployeeIdAndDate(
            Long employeeId,
            LocalDate date
    );
}