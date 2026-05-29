package org.nexushr.aiinsightsservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employee_skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long employeeId;

    private String skillName;

    private Integer proficiency;
}
