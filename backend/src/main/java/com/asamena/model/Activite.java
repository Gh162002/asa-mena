package com.asamena.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Activite {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private LocalDate date;
    private String lieu;
    @Column(length=2000) private String contexte;
    @Column(length=2000) private String description;
    @Column(length=1000) private String resultats;
    private String groupesImpliques;
    private String thematiques;
    private String categorie;
}
