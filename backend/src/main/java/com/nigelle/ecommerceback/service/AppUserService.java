package com.nigelle.ecommerceback.service;

import com.nigelle.ecommerceback.Repository.AppUserRepository;
import com.nigelle.ecommerceback.entities.AppUser;
import com.nigelle.ecommerceback.entities.Variation;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AppUserService implements IAppUserService {
    private  AppUserRepository appUserRepository; // Repository pour l'accès aux données


    @Override
    public AppUser create(AppUser entity) {
        return appUserRepository.save(entity);
    }

    @Override
    public AppUser update(AppUser entity) {
        return appUserRepository.save(entity);
    }

    @Override
    public void deleteById(Long id) {
        appUserRepository.deleteById(id);
    }

    @Override
    public AppUser getById(Long id) {
        AppUser appUser = appUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("AppUser   not found"));
        // Charger complètement l'entité
        Hibernate.initialize(appUser);
        return appUser;
    }

    @Override
    public List<AppUser> getAll() {
        return appUserRepository.findAll();
    }
}
