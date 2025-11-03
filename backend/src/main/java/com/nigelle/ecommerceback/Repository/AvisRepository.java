package com.nigelle.ecommerceback.Repository;

import com.nigelle.ecommerceback.entities.AppUser;
import com.nigelle.ecommerceback.entities.Avis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvisRepository extends JpaRepository<Avis, Long> {
    List<Avis> findAllByUser(AppUser user);
}