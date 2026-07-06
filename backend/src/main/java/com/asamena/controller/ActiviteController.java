package com.asamena.controller;

import com.asamena.model.Activite;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api/activites")
public class ActiviteController {
    
    // Sample data – replace with JPA repository in production
    private List<Activite> activites = new ArrayList<>(Arrays.asList(
        new Activite(1L, "Atelier régional sur la souveraineté semencière", 
            LocalDate.of(2024, 3, 15), "Tunis, Tunisie",
            "Face à la standardisation des variétés et à la dépendance aux semences commerciales.",
            "Réunion de 45 agriculteurs et agricultrices de 8 pays MENA pour partager leurs pratiques de conservation et d'échange de semences paysannes.",
            "Charte régionale sur les droits semenciers adoptée. Réseau d'échange de semences créé.",
            "Groupe Femmes, Groupe Syndicalistes", "Semences, Souveraineté alimentaire", "Formation"),
        new Activite(2L, "Forum international de la pêche artisanale MENA",
            LocalDate.of(2024, 5, 20), "Casablanca, Maroc",
            "Protection des ressources aquatiques et droits des communautés côtières.",
            "Forum réunissant 120 pêcheurs artisanaux de 6 pays pour défendre leurs droits face à la pêche industrielle.",
            "Déclaration commune adoptée. Plaidoyer porté au niveau FAO.",
            "Groupe Pêche", "Pêche artisanale, Souveraineté alimentaire", "Plaidoyer"),
        new Activite(3L, "Université d'été des jeunes agroécologistes",
            LocalDate.of(2024, 7, 10), "Amman, Jordanie",
            "Renforcement du leadership des jeunes dans les systèmes alimentaires.",
            "Semaine de formation intensive pour 60 jeunes militants de 10 pays sur l'agroécologie et le plaidoyer.",
            "60 jeunes formés, 15 projets communautaires lancés dans leurs territoires.",
            "Groupe Jeunes", "Agroécologie, Justice climatique", "Formation"),
        new Activite(4L, "Recherche participative sur les droits fonciers des femmes",
            LocalDate.of(2024, 9, 5), "Le Caire, Égypte",
            "Documenter les obstacles à l'accès à la terre pour les femmes rurales dans la région.",
            "Étude menée dans 5 pays avec 200 femmes rurales sur leurs droits fonciers et leur accès aux ressources.",
            "Rapport publié, recommandations portées auprès des gouvernements.",
            "Groupe Femmes, Groupe Recherche", "Terre, Justice sociale", "Recherche"),
        new Activite(5L, "Campagne régionale pour la gouvernance de l'eau",
            LocalDate.of(2024, 11, 12), "Beyrouth, Liban",
            "La région MENA est l'une des plus exposées au stress hydrique mondial.",
            "Mobilisation citoyenne dans 7 pays sur la gouvernance équitable de l'eau comme bien commun.",
            "Pétition de 15 000 signatures remise aux gouvernements. Couverture médiatique internationale.",
            "Groupe Data, Groupe Syndicalistes", "Eau, Justice climatique", "Mobilisation")
    ));

    @GetMapping
    public ResponseEntity<List<Activite>> getActivites(
            @RequestParam(required=false) String categorie) {
        if (categorie != null && !categorie.isEmpty()) {
            return ResponseEntity.ok(activites.stream()
                .filter(a -> a.getCategorie().equalsIgnoreCase(categorie))
                .toList());
        }
        return ResponseEntity.ok(activites);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activite> getActivite(@PathVariable Long id) {
        return activites.stream().filter(a -> a.getId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
