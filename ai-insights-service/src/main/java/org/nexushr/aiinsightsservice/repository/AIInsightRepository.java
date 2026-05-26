package org.nexushr.aiinsightsservice.repository;

import org.nexushr.aiinsightsservice.entity.AIInsight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AIInsightRepository
        extends JpaRepository<AIInsight, Long> {
}
