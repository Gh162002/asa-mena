package com.asamena.controller;

import com.asamena.model.ContactMessage;
import com.asamena.repository.ContactRepository;
import com.asamena.model.Contact;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Autowired
    private ContactRepository contactRepository;

    @Value("${app.contact.email:fsalliancemena@gmail.com}")
    private String contactEmail;

    @PostMapping
    public ResponseEntity<Map<String, String>> envoyerMessage(@Valid @RequestBody ContactMessage msg) {

        // 1. Sauvegarder en base de données
        try {
            Contact contact = new Contact();
            contact.setNom(msg.getNom());
            contact.setEmail(msg.getEmail());
            contact.setSujet(msg.getSujet());
            contact.setMessage(msg.getMessage());
            contact.setOrganisation(msg.getOrganisation());
            contactRepository.save(contact);
        } catch (Exception e) {
            System.err.println("Erreur sauvegarde contact : " + e.getMessage());
        }

        // 2. Envoyer l'email si le service mail est configuré
        if (mailSender != null) {
            try {
                // Email de notification à l'organisation
                SimpleMailMessage email = new SimpleMailMessage();
                email.setTo(contactEmail);
                email.setReplyTo(msg.getEmail());
                email.setSubject("[ASA-MENA] Nouveau message : " + msg.getSujet());
                email.setText(buildEmailBody(msg));
                mailSender.send(email);

                // Email de confirmation à l'expéditeur
                SimpleMailMessage confirmation = new SimpleMailMessage();
                confirmation.setTo(msg.getEmail());
                confirmation.setFrom(contactEmail);
                confirmation.setSubject("Confirmation - ASA-MENA a bien reçu votre message");
                confirmation.setText(buildConfirmationBody(msg));
                mailSender.send(confirmation);

            } catch (Exception e) {
                System.err.println("Erreur envoi email : " + e.getMessage());
                // On ne bloque pas la réponse si l'email échoue
            }
        }

        return ResponseEntity.ok(Map.of(
            "status", "success",
            "message", "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
        ));
    }

    private String buildEmailBody(ContactMessage msg) {
        return """
                Nouveau message de contact reçu sur le site ASA-MENA
                ─────────────────────────────────────────────────────
                Nom         : %s
                Email       : %s
                Organisation: %s
                Sujet       : %s
                
                Message :
                %s
                
                ─────────────────────────────────────────────────────
                Ce message a été envoyé depuis le formulaire de contact du site ASA-MENA.
                Pour répondre, utilisez directement l'email de l'expéditeur.
                """.formatted(
                msg.getNom(),
                msg.getEmail(),
                msg.getOrganisation() != null ? msg.getOrganisation() : "Non renseigné",
                msg.getSujet(),
                msg.getMessage()
        );
    }

    private String buildConfirmationBody(ContactMessage msg) {
        return """
                Bonjour %s,
                
                Nous avons bien reçu votre message concernant : « %s ».
                
                Notre équipe vous répondra dans les plus brefs délais.
                
                Cordialement,
                L'équipe ASA-MENA
                Alliance pour la Souveraineté Alimentaire en Afrique et au Moyen-Orient
                fsalliancemena@gmail.com
                """.formatted(msg.getNom(), msg.getSujet());
    }
}
