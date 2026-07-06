package com.asamena.controller;

import com.asamena.model.Actualite;
import com.asamena.repository.ActualiteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/actualites")
public class ActualiteController {

    private final ActualiteRepository repo;

    public ActualiteController(ActualiteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Actualite> getAll(@RequestParam(required = false) String categorie) {
        if (categorie != null && !categorie.isBlank()) {
            return repo.findByCategorieOrderByDatePublicationDesc(categorie);
        }
        return repo.findAllByOrderByDatePublicationDesc();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Actualite> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Actualite create(@RequestBody Actualite actualite) {
        return repo.save(actualite);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Actualite> update(@PathVariable Long id, @RequestBody Actualite data) {
        return repo.findById(id).map(a -> {
            a.setTitre(data.getTitre());
            a.setResume(data.getResume());
            a.setContenu(data.getContenu());
            a.setCategorie(data.getCategorie());
            a.setDatePublication(data.getDatePublication());
            a.setAuteur(data.getAuteur());
            a.setImageUrl(data.getImageUrl());
            a.setPays(data.getPays());
            return ResponseEntity.ok(repo.save(a));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
