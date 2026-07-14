package com.asamena.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank private String nom;
    @NotBlank @Email private String email;
    @NotBlank private String sujet;
    @NotBlank @Size(min=2) private String message;
    private String organisation;
    private LocalDateTime dateEnvoi = LocalDateTime.now();
}
