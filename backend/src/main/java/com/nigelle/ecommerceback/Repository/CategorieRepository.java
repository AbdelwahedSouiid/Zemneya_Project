package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {

    public Categorie findByNom(String categorie);
}
