package org.nexushr.employeeservice.service;

import org.nexushr.employeeservice.dto.PerformanceReviewRequest;
import org.nexushr.employeeservice.entity.PerformanceReview;
import org.nexushr.employeeservice.repository.PerformanceReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PerformanceReviewService {

    private final PerformanceReviewRepository repository;

    public PerformanceReview createReview(
            PerformanceReviewRequest request) {

        int overall =
                (request.getCommunicationRating()
                        + request.getTechnicalRating()
                        + request.getTeamworkRating()) / 3;

        PerformanceReview review = PerformanceReview.builder()
                .employeeId(request.getEmployeeId())
                .reviewerName(request.getReviewerName())
                .communicationRating(request.getCommunicationRating())
                .technicalRating(request.getTechnicalRating())
                .teamworkRating(request.getTeamworkRating())
                .overallRating(overall)
                .feedback(request.getFeedback())
                .reviewDate(LocalDate.now())
                .build();

        return repository.save(review);
    }

    public List<PerformanceReview> getEmployeeReviews(Long employeeId) {
        return repository.findByEmployeeId(employeeId);
    }
    public List<PerformanceReview> getAllReviews() {
        return repository.findAll();
    }
}