package com.asamena.controller;

import com.asamena.model.ContactMessage;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
    
    @PersistenceContext
    private EntityManager em;
    
    @PostMapping
    public ResponseEntity<Map<String, String>> envoyerMessage(@Valid @RequestBody ContactMessage msg) {
        msg.setDateEnvoi(LocalDateTime.now());
        // In production: send email or persist to DB
        System.out.println("Nouveau message de: " + msg.getNom() + " - " + msg.getSujet());
        return ResponseEntity.ok(Map.of(
            "status", "success",
            "message", "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
        ));
    }
}
