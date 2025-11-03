package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Produit;
import com.nigelle.ecommerceback.service.IProduitService;
import com.nigelle.ecommerceback.service.ProduitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Produit")
public class ProduitContoller {

    private final ProduitService produitService;
    private  IProduitService service ;

    public ProduitContoller(IProduitService service, ProduitService produitService) {
        this.service = service;
        this.produitService = produitService;
    }

    @GetMapping("/allProduits")
    public List<Produit> getAllProduits() {
        return service.getAll();
    }

    @PostMapping("/addProduit")
    public Produit createProduit(@RequestBody Produit Produit) {
        return service.create(Produit);
    }

    @PutMapping("/updateProduit")
    public Produit updateProduit(@RequestBody Produit Produit) {
        return service.update(Produit);
    }

    @DeleteMapping("/deleteProduit/{id}")
    public void deleteProduit(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findProduitById/{id}")
    public Produit getProduitById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Produit>> searchProduit(
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "name", required = false) String name){

        // Appel au service avec les filtres
        List<Produit> produits = produitService.search(name, category);
        return new ResponseEntity<>(produits, HttpStatus.OK);
    }

}
