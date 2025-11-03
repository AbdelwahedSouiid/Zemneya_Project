package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Categorie;
import com.nigelle.ecommerceback.service.ICategorieService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Categorie")
@AllArgsConstructor
public class CategorieController {
    private  ICategorieService service;
    @GetMapping("/allCategories")
    public List<Categorie> getAllCategories() {
        return service.getAll();
    }

    @PostMapping("/addCategorie")
    public Categorie createCategorie(@RequestBody Categorie Categorie) {
        return service.create(Categorie);
    }

    @PutMapping("/updateCategorie")
    public Categorie updateCategorie(@RequestBody Categorie Categorie) {
        return service.update(Categorie);
    }

    @DeleteMapping("/deleteCategorie/{id}")
    public void deleteCategorie(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findCategorieById/{id}")
    public Categorie getCategorieById(@PathVariable Long id) {
        return service.getById(id);
    }





}
