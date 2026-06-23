package org.nexushr.notificationservice.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SMSservice {
    public void sendSMS(String phone, String message){
        System.out.println("SMS sent to "+phone+" message: "+message);
    }
}
