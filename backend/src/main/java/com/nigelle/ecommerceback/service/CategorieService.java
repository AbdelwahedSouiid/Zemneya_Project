package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.Repository.CategorieRepository;
import com.nigelle.ecommerceback.Repository.SousCategorieRepository;
import com.nigelle.ecommerceback.entities.Categorie;
import com.nigelle.ecommerceback.entities.SousCategorie;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class CategorieService implements ICategorieService {
    CategorieRepository  categorieRepository; // Repository pour l'accès aux données
    SousCategorieRepository sousCategorieRepository;

    @Override
    public Categorie create(Categorie entity) {
        return categorieRepository.save(entity);
    }

    @Override
    public Categorie update(Categorie entity) {
        return categorieRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        categorieRepository.deleteById(id);
    }

    @Override
    public Categorie getById(Long id) {
        Categorie category = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        // Charger complètement l'entité
        Hibernate.initialize(category);
        return category;
    }

    @Override
    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }
}
