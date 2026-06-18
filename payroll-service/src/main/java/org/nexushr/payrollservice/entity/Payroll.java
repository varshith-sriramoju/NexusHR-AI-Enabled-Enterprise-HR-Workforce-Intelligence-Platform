package org.nexushr.payrollservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "payroll")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payroll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long employeeId;

    private Double baseSalary;

    private Double bonus;

    private Double deductions;

    private Double tax;

    private Double netSalary;

    private String status;

    private LocalDate payDate;
}
