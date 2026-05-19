package org.nexushr.employeeservice.dto;

import lombok.Data;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Data
public class PerformanceReviewRequest {

    private Long employeeId;

    private String reviewerName;

    @NotNull
    @Min(1)
    @Max(5)
    private Integer communicationRating;

    @NotNull
    @Min(1)
    @Max(5)
    private Integer technicalRating;

    @NotNull
    @Min(1)
    @Max(5)
    private Integer teamworkRating;

    private String feedback;
}