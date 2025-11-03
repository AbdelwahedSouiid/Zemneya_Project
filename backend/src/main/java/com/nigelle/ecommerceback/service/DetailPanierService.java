package com.nigelle.ecommerceback.service;


import com.nigelle.ecommerceback.Repository.DetailPanierRepository;
import com.nigelle.ecommerceback.Repository.PanierRepository;
import com.nigelle.ecommerceback.Repository.VariationRepository;
import com.nigelle.ecommerceback.entities.DetailPanier;
import com.nigelle.ecommerceback.entities.Panier;
import com.nigelle.ecommerceback.entities.Variation;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DetailPanierService implements IDetailPanierService {

    private final VariationRepository variationRepository;
    private final LocalContainerEntityManagerFactoryBean entityManagerFactory;
    private final PanierRepository panierRepository;
    protected DetailPanierRepository detailPanierRepository;

    @Override
    public DetailPanier create(DetailPanier detailPanier) {
        // Vérifier si le panier est bien persisté
       if (detailPanier.getPanier().getId() == null) {
            throw new IllegalArgumentException("Le panier doit être existant et avoir un ID.");
        }


        // Vérifier que la variation est persistée
        if (detailPanier.getVariation() == null || detailPanier.getVariation().getId() == null) {
            throw new IllegalArgumentException("La variation doit être existante et avoir un ID.");
        }

        detailPanier.setSousTotal(detailPanier.getQuantite() * detailPanier.getVariation().getPrixUnitaire());

        return detailPanierRepository.save(detailPanier);
    }

    @Override
    public DetailPanier update(DetailPanier entity) {

        // Enregistrer l'entité DetailPanier
        return detailPanierRepository.save(entity);}

    @Override
    public void deleteById(Long id) {
        detailPanierRepository.deleteById(id);
    }


    @Override
    public DetailPanier getById(Long id) {
        DetailPanier product = detailPanierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("DetailPanier not found"));
        // Charger complètement l'entité
        Hibernate.initialize(product);
        return product;
    }

    @Override
    public List<DetailPanier> getAll() {
        return detailPanierRepository.findAll();
    }

    @Override
    public List<DetailPanier> getByPanierId(Long panierId) {
        Panier p = panierRepository.findById(panierId).get();
        return detailPanierRepository.findAllByPanier(p);
    }
}
