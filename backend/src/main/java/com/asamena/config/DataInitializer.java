package com.asamena.config;

import com.asamena.model.Actualite;
import com.asamena.repository.ActualiteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(ActualiteRepository actualiteRepo) {
        return args -> {
            if (actualiteRepo.count() > 0) return;

            actualiteRepo.save(new Actualite(
                "Atelier régional sur les droits fonciers – Tunis",
                "L'Alliance a organisé un atelier de deux jours réunissant des organisations paysannes de 8 pays MENA pour discuter des droits fonciers et de la résistance à l'accaparement des terres.",
                "Dans le cadre du Groupe Syndicalistes et Petits Agriculteurs, l'Alliance a tenu un atelier régional à Tunis les 14 et 15 mai 2026. Plus de 60 représentants d'organisations paysannes ont participé pour partager leurs expériences face aux pressions foncières croissantes et co-construire des stratégies de résistance et de plaidoyer collectif.",
                "Formation",
                LocalDate.of(2026, 5, 20),
                "Équipe ASA-MENA"
            ));

            actualiteRepo.save(new Actualite(
                "Participation au Forum Mondial de la Souveraineté Alimentaire",
                "Une délégation de l'Alliance a porté la voix des communautés MENA lors du forum international à Genève, en défendant les droits à l'eau et aux semences.",
                "Du 3 au 6 juin 2026, une délégation composée de membres du Groupe Femmes, du Groupe Jeunes et du Groupe Pêche a participé au Forum Mondial de la Souveraineté Alimentaire à Genève. La délégation a présenté un rapport régional sur l'état des ressources naturelles en MENA et porté des revendications fortes sur la gouvernance équitable de l'eau.",
                "Plaidoyer",
                LocalDate.of(2026, 6, 10),
                "Équipe ASA-MENA"
            ));

            actualiteRepo.save(new Actualite(
                "Formation des jeunes à l'agroécologie – Maroc",
                "Le Groupe Jeunes a lancé un programme pilote de formation à l'agroécologie destiné à 30 jeunes agriculteurs dans la région de Meknès.",
                "En partenariat avec des organisations locales, le Groupe Jeunes de l'Alliance a lancé un cycle de 5 ateliers pratiques sur les techniques agroécologiques adaptées aux zones semi-arides du Maroc. Ce programme vise à transmettre les savoirs paysans tout en intégrant des approches innovantes pour renforcer la résilience face au changement climatique.",
                "Formation",
                LocalDate.of(2026, 4, 15),
                "Groupe Jeunes ASA-MENA"
            ));

            actualiteRepo.save(new Actualite(
                "Rapport : Droits des femmes rurales dans la région MENA",
                "Le Groupe Femmes publie une étude sur les inégalités d'accès aux ressources productives pour les femmes rurales dans 7 pays de la région.",
                "Fruit de 18 mois de recherche participative menée dans 7 pays, ce rapport documente les obstacles auxquels font face les femmes rurales pour accéder à la terre, à l'eau et aux semences. Il formule des recommandations concrètes à l'attention des gouvernements et des institutions régionales pour une gouvernance alimentaire plus équitable.",
                "Recherche",
                LocalDate.of(2026, 3, 8),
                "Groupe Femmes ASA-MENA"
            ));

            actualiteRepo.save(new Actualite(
                "Campagne régionale : L'eau, un droit, pas une marchandise",
                "L'Alliance lance une campagne de sensibilisation régionale sur la crise hydrique en MENA et la nécessité d'une gouvernance équitable de l'eau.",
                "Face à l'aggravation du stress hydrique dans la région MENA, l'Alliance lance une campagne régionale 'L'eau, un droit, pas une marchandise'. La campagne vise à mobiliser les communautés, sensibiliser le grand public et interpeller les décideurs politiques sur la nécessité de protéger l'eau comme bien commun.",
                "Campagne",
                LocalDate.of(2026, 6, 1),
                "Équipe ASA-MENA"
            ));
        };
    }
}
