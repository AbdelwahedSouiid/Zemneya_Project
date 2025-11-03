package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.entities.Produit;
import com.nigelle.ecommerceback.entities.Variation;

import java.util.List;

public interface IVariationService extends IService<Variation> {

    public List<Variation> getAllVariationByProductId(Long product);
}
