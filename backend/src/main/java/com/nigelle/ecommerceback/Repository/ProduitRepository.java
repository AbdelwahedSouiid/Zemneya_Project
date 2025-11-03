package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.Categorie;
import com.nigelle.ecommerceback.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

    List<Produit> findByCategorie(Categorie categorie);

    List<Produit> findByNom(String nom);

    // Search by category and product name
    List<Produit> findByCategorieAndNom(Categorie categorie, String nom);

    // Advanced search using @Query annotation to allow more complex filtering (category and name search)
    @Query("SELECT p FROM Produit p WHERE (:categorie IS NULL OR p.categorie = :categorie) AND (:nom IS NULL OR p.nom LIKE %:nom%)")
    List<Produit> searchByCategoryAndName(@Param("categorie") Categorie categorie, @Param("nom") String nom);
}

