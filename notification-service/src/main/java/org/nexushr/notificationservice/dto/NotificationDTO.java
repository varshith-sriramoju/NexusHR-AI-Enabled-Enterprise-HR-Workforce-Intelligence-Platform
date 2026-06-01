package org.nexushr.notificationservice.dto;
import lombok.*;

@Getter
@Setter

public class NotificationDTO {

    private String message;

    private String type;

    private Long userId;
}