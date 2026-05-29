package org.nexushr.aiinsightsservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "role_required_skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roleName;

    private String skillName;
}
