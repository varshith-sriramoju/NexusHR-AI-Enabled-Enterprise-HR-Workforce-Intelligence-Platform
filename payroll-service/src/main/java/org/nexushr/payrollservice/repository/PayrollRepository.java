package org.nexushr.payrollservice.repository;

import org.nexushr.payrollservice.entity.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayrollRepository extends JpaRepository<Payroll, Long> {
}