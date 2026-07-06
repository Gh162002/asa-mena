package com.asamena.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity
@Table(name = "actualites")
public class Actualite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titre;

    @Column(columnDefinition = "TEXT")
    private String resume;

    @Column(columnDefinition = "TEXT")
    private String contenu;

    private String categorie; // "Plaidoyer", "Formation", "Evenement", etc.
    private String imageUrl;
    private LocalDate datePublication;
    private String auteur;
    private String pays;

    public Actualite() {}

    public Actualite(String titre, String resume, String contenu, String categorie, LocalDate datePublication, String auteur) {
        this.titre = titre;
        this.resume = resume;
        this.contenu = contenu;
        this.categorie = categorie;
        this.datePublication = datePublication;
        this.auteur = auteur;
    }

    public Long getId() { return id; }
    public String getTitre() { return titre; }
    public void setTitre(String titre) { this.titre = titre; }
    public String getResume() { return resume; }
    public void setResume(String resume) { this.resume = resume; }
    public String getContenu() { return contenu; }
    public void setContenu(String contenu) { this.contenu = contenu; }
    public String getCategorie() { return categorie; }
    public void setCategorie(String categorie) { this.categorie = categorie; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public LocalDate getDatePublication() { return datePublication; }
    public void setDatePublication(LocalDate datePublication) { this.datePublication = datePublication; }
    public String getAuteur() { return auteur; }
    public void setAuteur(String auteur) { this.auteur = auteur; }
    public String getPays() { return pays; }
    public void setPays(String pays) { this.pays = pays; }
}
