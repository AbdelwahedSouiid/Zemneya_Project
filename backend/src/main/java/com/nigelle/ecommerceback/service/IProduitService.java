package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.entities.Produit;

import java.util.List;

public interface IProduitService extends IService<Produit>{

    public List<Produit> search(String name, String categorieNom);
}
