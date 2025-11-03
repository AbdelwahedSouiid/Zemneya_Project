package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.DetailPanier;
import com.nigelle.ecommerceback.entities.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailPanierRepository extends JpaRepository<DetailPanier,Long> {
    List<DetailPanier> findAllByPanier(Panier panier);
}
