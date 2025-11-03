package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.entities.Panier;

public interface IPanierService extends IService<Panier> {
    Panier getByUtilisateurId(Long utilisateurId);
    void recalculerTotal(Long panierId);
    void viderPanier(Long panierId);
}
