package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.Repository.ProduitRepository;
import com.nigelle.ecommerceback.Repository.VariationRepository;
import com.nigelle.ecommerceback.entities.Avis;
import com.nigelle.ecommerceback.entities.Produit;
import com.nigelle.ecommerceback.entities.Variation;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class VariationService implements IVariationService {
    private final VariationRepository variationRepository; // Repository pour l'accès aux données
    private final ProduitRepository produitRepository;


    @Override
    public Variation create(Variation entity) {
        return variationRepository.save(entity);
    }

    @Override
    public Variation update(Variation entity) {
        return variationRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        variationRepository.deleteById(id);
    }

    @Override
    public Variation getById(Long id) {
        Variation variation = variationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vari   not found"));
        // Charger complètement l'entité
        Hibernate.initialize(variation);

        return variation;
    }

    @Override
    public List<Variation> getAll() {
        return variationRepository.findAll();
    }

    @Override
    public List<Variation> getAllVariationByProductId(Long product) {
        Produit produit = produitRepository.findById(product).get();
        return variationRepository.findByProduit(produit);
    }
}
