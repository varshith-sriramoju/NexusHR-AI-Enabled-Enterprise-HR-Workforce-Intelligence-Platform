package org.nexushr.employeeservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.nexushr.employeeservice.dto.NotificationRequest;

@FeignClient(name = "notification-service",url = "http://localhost:8085")
public interface NotificationClient {
    @PostMapping("api/notifications/email")
    void sendEmail(@RequestBody NotificationRequest notificationRequest);

}
