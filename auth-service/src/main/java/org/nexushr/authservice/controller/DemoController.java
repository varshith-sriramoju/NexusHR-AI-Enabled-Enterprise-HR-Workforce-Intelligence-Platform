package org.nexushr.authservice.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/demo")
public class DemoController {

    @GetMapping("/employee")
    @PreAuthorize("hasRole('EMPLOYEE')")
    public String employeeAccess() {

        return "Employee Access Granted";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {

        return "Admin Access Granted";
    }
}