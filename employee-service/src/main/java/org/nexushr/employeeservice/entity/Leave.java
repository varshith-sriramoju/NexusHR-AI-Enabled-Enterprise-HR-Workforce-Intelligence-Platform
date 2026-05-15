package org.nexushr.employeeservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

import org.nexushr.employeeservice.enums.LeaveStatus;
import org.nexushr.employeeservice.enums.LeaveType;

@Entity
@Table(name = "leaves")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long employeeId;

    @Enumerated(EnumType.STRING)
    private LeaveType leaveType;

    private LocalDate startDate;

    private LocalDate endDate;

    private String reason;

    @Enumerated(EnumType.STRING)
    private LeaveStatus status;
}