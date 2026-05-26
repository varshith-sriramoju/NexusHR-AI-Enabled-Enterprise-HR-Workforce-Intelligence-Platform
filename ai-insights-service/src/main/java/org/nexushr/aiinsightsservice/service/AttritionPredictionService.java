    package org.nexushr.aiinsightsservice.service;

    import org.nexushr.aiinsightsservice.dto.AttritionRequest;
    import org.springframework.ai.chat.client.ChatClient;
    import org.springframework.cache.annotation.Cacheable;
    import org.springframework.stereotype.Service;

    @Service
    public class AttritionPredictionService {

        private final ChatClient chatClient;

        public AttritionPredictionService(ChatClient.Builder builder) {
            this.chatClient = builder.build();
        }

        @Cacheable(value = "attritionRisk",
                key = "#request.employeeName")
        public String predictRisk(AttritionRequest request) {

            String prompt = """
                Analyze employee attrition risk.
                Attendance: %d
                Leaves: %d
                Performance: %.2f
                Overtime: %d
                Department: %s
                """
                    .formatted(
                            request.getAttendancePercentage(),
                            request.getLeaveCount(),
                            request.getPerformanceScore(),
                            request.getOvertimeHours(),
                            request.getDepartment()
                    );

            return chatClient.prompt()
                    .user(prompt)
                    .call()
                    .content();
        }
    }