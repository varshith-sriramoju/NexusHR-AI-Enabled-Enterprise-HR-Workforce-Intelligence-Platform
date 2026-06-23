package org.nexushr.notificationservice.service;

import lombok.RequiredArgsConstructor;
import org.nexushr.notificationservice.dto.NotificationDTO;
import org.nexushr.notificationservice.entity.Notification;
import org.nexushr.notificationservice.repository.NotificationRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final SimpMessagingTemplate messagingTemplate;

    private final NotificationRepository repository;


    public void sendEmail(NotificationDTO notificationDTO) {}

    public void sendNotification(NotificationDTO dto) {

        Notification notification = new Notification();

        notification.setMessage(dto.getMessage());
        notification.setType(dto.getType());
        notification.setUserId(dto.getUserId());
        notification.setRead(false);

        repository.save(notification);

        messagingTemplate.convertAndSend(
                "/topic/notifications/" + dto.getUserId(),
                dto
        );
    }
    private final EmailService emailService;
    private final SMSservice smsservice;
    public  void sendApprovedNotification(String email, String phone){
        emailService.sendEmail(email,"Leave Approved","Your leave has been approved");
        smsservice.sendSMS(phone,"Leave Approved");
    }
    public void sendAttendceRemainder(String email){
        emailService.sendEmail(email,"Attendance Reminder","Please mark your attendance for today");
    }
}
