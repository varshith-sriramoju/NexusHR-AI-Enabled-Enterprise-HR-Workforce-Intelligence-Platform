package org.nexushr.aiinsightsservice.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class SkillRecommendationService {

    private final ChatClient chatClient;

    public SkillRecommendationService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Cacheable(value = "skillRecommendations", key = "#skills.toString()")
    public List<String> generateRecommendations(List<String> skills) {

        String skillsList = String.join(", ", skills);

        String prompt = """
            Based on these employee skills: %s
            Generate 5 specific training recommendations to improve career growth.
            Return as a comma-separated list.
            Format: Training1,Training2,Training3,Training4,Training5
            """.formatted(skillsList);

        String response = chatClient.prompt()
                .user(prompt)
                .call()
                .content();

        return Arrays.stream(response.split(","))
                .map(String::trim)
                .toList();
    }
}

