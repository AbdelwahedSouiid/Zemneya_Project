package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.Repository.AppUserRepository;
import com.nigelle.ecommerceback.Repository.AvisRepository;
import com.nigelle.ecommerceback.entities.Avis;
import com.nigelle.ecommerceback.entities.Categorie;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AvisService implements IAvisService {

    private final AvisRepository avisRepository; // Repository pour l'accès aux données
    public AvisService(AvisRepository avisRepository) {
        this.avisRepository = avisRepository;
    }

    @Override
    public Avis create(Avis entity) {
        return avisRepository.save(entity);
    }

    @Override
    public Avis update(Avis entity) {
        return avisRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        avisRepository.deleteById(id);
    }

    @Override
    public Avis getById(Long id) {
        Avis avis = avisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avis not found"));
        // Charger complètement l'entité
        Hibernate.initialize(avis);

        return avis;
    }

    @Override
    public List<Avis> getAll() {
        return  avisRepository.findAll();
    }
}
