package org.nexushr.notificationservice.controller;

import lombok.RequiredArgsConstructor;
import org.nexushr.notificationservice.dto.NotificationDTO;
import org.nexushr.notificationservice.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService service;

    @PostMapping("/send")
    public ResponseEntity<String> send(
            @RequestBody NotificationDTO dto) {

        service.sendNotification(dto);

        return ResponseEntity.ok("Notification Sent");
    }
}
