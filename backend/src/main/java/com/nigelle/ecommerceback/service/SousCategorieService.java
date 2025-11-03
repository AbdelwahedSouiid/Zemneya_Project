package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.Repository.SousCategorieRepository;
import com.nigelle.ecommerceback.entities.SousCategorie;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SousCategorieService implements ISousCategorieService {

    SousCategorieRepository sousCategorieRepository;
    @Override
    public SousCategorie create(SousCategorie entity) {
        return sousCategorieRepository.save(entity);
    }

    @Override
    public SousCategorie update(SousCategorie entity) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public SousCategorie getById(Long id) {
        return sousCategorieRepository.getById(id);
    }

    @Override
    public List<SousCategorie> getAll() {
        return sousCategorieRepository.findAll();
    }
}
