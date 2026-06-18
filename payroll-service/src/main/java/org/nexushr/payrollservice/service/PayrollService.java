package org.nexushr.payrollservice.service;

import org.nexushr.payrollservice.dto.PayrollRequest;
import org.nexushr.payrollservice.dto.PayrollSummaryDTO;
import org.nexushr.payrollservice.entity.Payroll;
import org.nexushr.payrollservice.repository.PayrollRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class PayrollService {

    private final PayrollRepository payrollRepository;



    public Payroll generatePayroll(PayrollRequest request) {

        double grossSalary =
                request.getBaseSalary()
                        + request.getBonus();

        double tax = grossSalary * 0.10;

        double netSalary =
                grossSalary
                        - tax
                        - request.getDeductions();

        Payroll payroll = Payroll.builder()
                .employeeId(request.getEmployeeId())
                .baseSalary(request.getBaseSalary())
                .bonus(request.getBonus())
                .deductions(request.getDeductions())
                .tax(tax)
                .netSalary(netSalary)
                .status("PROCESSED")
                .payDate(LocalDate.now())
                .build();

        return payrollRepository.save(payroll);
    }
    public String generatePayslip(Long id) {

        Payroll payroll = payrollRepository.findById(id)
                .orElseThrow();

        return """
            ===== PAYSLIP =====
            Employee ID: %d
            Base Salary: %.2f
            Bonus: %.2f
            Tax: %.2f
            Deductions: %.2f
            Net Salary: %.2f
            Date: %s
            ===================
            """
                .formatted(
                        payroll.getEmployeeId(),
                        payroll.getBaseSalary(),
                        payroll.getBonus(),
                        payroll.getTax(),
                        payroll.getDeductions(),
                        payroll.getNetSalary(),
                        payroll.getPayDate()
                );
    }
    public PayrollSummaryDTO getPayrollSummary() {

        Double totalPayroll =
                payrollRepository.getTotalPayroll();

        long processedEmployees =
                payrollRepository.countByStatus("PROCESSED");

        return new PayrollSummaryDTO(
                totalPayroll,
                processedEmployees
        );
    }
}
