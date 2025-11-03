package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.Produit;
import com.nigelle.ecommerceback.entities.Variation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VariationRepository extends JpaRepository<Variation, Long> {

    List<Variation> findByProduit(Produit p);
}
