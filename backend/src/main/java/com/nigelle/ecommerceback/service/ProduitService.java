package com.nigelle.ecommerceback.service;



import com.nigelle.ecommerceback.Repository.CategorieRepository;
import com.nigelle.ecommerceback.Repository.ProduitRepository;
import com.nigelle.ecommerceback.entities.Categorie;
import com.nigelle.ecommerceback.entities.Produit;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ProduitService implements IProduitService {
    private ProduitRepository produitRepository; // Repository pour l'accès aux données
    private CategorieRepository categorieRepository;

    @Override
    public Produit create(Produit entity) {
        return produitRepository.save(entity);
    }

    @Override
    public Produit update(Produit entity) {
        return produitRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        produitRepository.deleteById(id);
    }


    @Override
    public Produit getById(Long id) {
        Produit product = produitRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        // Charger complètement l'entité
        Hibernate.initialize(product);
        return product;
    }

    @Override
    public List<Produit> getAll() {
        return produitRepository.findAll();
    }

    @Override
    public List<Produit> search(String name, String categorieNom) {

        List<Produit> produits = new ArrayList<>();

        if (name != null && !name.isEmpty() && categorieNom != null && !categorieNom.isEmpty()) {
            // Search by both name and category
            Categorie categorie = categorieRepository.findByNom(categorieNom);
            produits = produitRepository.findByCategorieAndNom(categorie, name);

        } else if (name != null && !name.isEmpty()) {
            // Search by name only
            produits = produitRepository.findByNom(name);

        } else if (categorieNom != null && !categorieNom.isEmpty()) {
            // Search by category only
            Categorie categorie = categorieRepository.findByNom(categorieNom);
            produits = produitRepository.findByCategorie(categorie);
            System.out.println(produits);
        } else {
            // If no filters, return all products
            produits = produitRepository.findAll();
        }
        return produits;
    }
}
