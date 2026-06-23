package org.nexushr.employeeservice.dto;


public record NotificationRequest(String to, String subject, String body) {
    }

