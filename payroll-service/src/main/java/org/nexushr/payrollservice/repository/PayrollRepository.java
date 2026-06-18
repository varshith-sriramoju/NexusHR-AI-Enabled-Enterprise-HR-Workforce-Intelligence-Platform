package org.nexushr.payrollservice.repository;

import org.nexushr.payrollservice.entity.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PayrollRepository extends JpaRepository<Payroll, Long> {
    @Query("""
           SELECT COALESCE(SUM(p.netSalary),0)
           FROM Payroll p
           """)
    Double getTotalPayroll();

    long countByStatus(String status);
}