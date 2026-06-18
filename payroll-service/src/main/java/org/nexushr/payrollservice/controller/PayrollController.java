package org.nexushr.payrollservice.controller;

import org.nexushr.payrollservice.dto.PayrollRequest;
import org.nexushr.payrollservice.dto.PayrollSummaryDTO;
import org.nexushr.payrollservice.entity.Payroll;
import org.nexushr.payrollservice.service.PayrollService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payroll")
@RequiredArgsConstructor
public class PayrollController {

    private final PayrollService payrollService;

    @PostMapping("/generate")
    public Payroll generatePayroll(@RequestBody PayrollRequest request) {
        return payrollService.generatePayroll(request);
    }
    @GetMapping("/payslip/{id}")
    public String getPayslip(@PathVariable Long id) {
        return payrollService.generatePayslip(id);
    }

    @GetMapping("/summary")
    public PayrollSummaryDTO getPayrollSummary() {
        return payrollService.getPayrollSummary();
    }
}