package com.nigelle.ecommerceback.service;


import com.nigelle.ecommerceback.Repository.CategorieRepository;
import com.nigelle.ecommerceback.Repository.DetailPanierRepository;
import com.nigelle.ecommerceback.Repository.PanierRepository;
import com.nigelle.ecommerceback.entities.Categorie;
import com.nigelle.ecommerceback.entities.DetailPanier;
import com.nigelle.ecommerceback.entities.Panier;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PanierService implements IPanierService {

    private final PanierRepository panierRepository;
    private final DetailPanierRepository detailPanierRepository;
    private PanierRepository PanierRepository; // Repository pour l'accès aux données
    private CategorieRepository categorieRepository;

    @Override
    public Panier create(Panier entity) {
        return PanierRepository.save(entity);
    }

    @Override
    public Panier update(Panier entity) {
        return PanierRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        PanierRepository.deleteById(id);
    }


    @Override
    public Panier getById(Long id) {
        Panier product = PanierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Panier not found"));
        // Charger complètement l'entité
        Hibernate.initialize(product);
        return product;
    }

    @Override
    public List<Panier> getAll() {
        return PanierRepository.findAll();
    }

    @Override
    public Panier getByUtilisateurId(Long utilisateurId) {
        return panierRepository.findByUtilisateurId(utilisateurId)
                .orElseThrow(() -> new RuntimeException("Panier introuvable pour cet utilisateur !"));
    }

    @Override
    public void recalculerTotal(Long panierId) {
        Panier panier = panierRepository.findById(panierId)
                .orElseThrow(() -> new RuntimeException("Panier introuvable !"));
        List<DetailPanier> detailPaniers = detailPanierRepository.findAllByPanier(panier);

        double total =detailPaniers.stream()
                .mapToDouble(ligne -> ligne.getQuantite() * ligne.getVariation().getPrixUnitaire())
                .sum();

        panier.setTotal(total);
        panierRepository.save(panier);}

    @Override
    public void viderPanier(Long panierId) {
        Panier panier = panierRepository.findById(panierId)
                .orElseThrow(() -> new RuntimeException("Panier introuvable !"));
        List<DetailPanier> detailPaniers = detailPanierRepository.findAllByPanier(panier);
        for (DetailPanier detailPanier : detailPaniers) {
            detailPanier.setPanier(null);
            detailPanierRepository.save(detailPanier);
        }
        panier.setTotal(0);
        panierRepository.save(panier);

    }
}
