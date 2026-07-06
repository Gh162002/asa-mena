package com.asamena.repository;

import com.asamena.model.Actualite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ActualiteRepository extends JpaRepository<Actualite, Long> {
    List<Actualite> findAllByOrderByDatePublicationDesc();
    List<Actualite> findByCategorieOrderByDatePublicationDesc(String categorie);
}
