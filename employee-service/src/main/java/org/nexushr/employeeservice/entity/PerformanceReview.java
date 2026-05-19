package org.nexushr.employeeservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "performance_reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PerformanceReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long employeeId;

    private String reviewerName;

    private Integer communicationRating;

    private Integer technicalRating;

    private Integer teamworkRating;

    private Integer overallRating;

    private String feedback;

    private LocalDate reviewDate;
}