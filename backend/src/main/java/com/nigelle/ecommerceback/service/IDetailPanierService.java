package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.entities.DetailPanier;

import java.util.List;

public interface IDetailPanierService extends IService<DetailPanier> {
    List<DetailPanier> getByPanierId(Long panierId);

}
