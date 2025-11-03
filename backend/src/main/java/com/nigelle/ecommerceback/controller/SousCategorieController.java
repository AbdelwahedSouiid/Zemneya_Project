package com.nigelle.ecommerceback.controller;


import com.nigelle.ecommerceback.entities.Avis;
import com.nigelle.ecommerceback.entities.SousCategorie;
import com.nigelle.ecommerceback.service.IAvisService;
import com.nigelle.ecommerceback.service.IService;
import com.nigelle.ecommerceback.service.SousCategorieService;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/SousCategorie")
@AllArgsConstructor
public class SousCategorieController {


    private final IService<SousCategorie> service;

    @GetMapping("/allSousCategorie")
    public List<SousCategorie> getAllSousCategorie() {
        return service.getAll();
    }

    @PostMapping("/addSousCategorie")
    public SousCategorie createSousCategorie(@RequestBody SousCategorie SousCategorie) {
        return service.create(SousCategorie);
    }

    @PutMapping("/updateSousCategorie")
    public SousCategorie updateSousCategorie(@RequestBody SousCategorie SousCategorie) {
        return service.update(SousCategorie);
    }

    @DeleteMapping("/deleteAvis/{id}")
    public void deleteSousCategorie(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findSousCategorieById/{id}")
    public SousCategorie getSousCategorieById(@PathVariable Long id) {
        return service.getById(id);
    }
}
