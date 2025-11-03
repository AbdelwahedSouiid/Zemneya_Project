package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.SousCategorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SousCategorieRepository extends JpaRepository<SousCategorie, Long> {
}
