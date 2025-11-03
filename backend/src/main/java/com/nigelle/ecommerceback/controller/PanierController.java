package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Panier;
import com.nigelle.ecommerceback.service.IPanierService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Panier")
@AllArgsConstructor
public class PanierController {

    private IPanierService panierService;

    @PostMapping("/addPanier")
    public ResponseEntity<Panier> createPanier(@RequestBody Panier panier) {
        return ResponseEntity.ok(panierService.create(panier));
    }

    @PutMapping("/updatePanier")
    public ResponseEntity<Panier> updatePanier(@RequestBody Panier panier) {
        return ResponseEntity.ok(panierService.update(panier));
    }

    @DeleteMapping("/deletePanier/{id}")
    public ResponseEntity<Void> deletePanier(@PathVariable Long id) {
        panierService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("findPanierById/{id}")
    public ResponseEntity<Panier> getPanierById(@PathVariable Long id) {
        return ResponseEntity.ok(panierService.getById(id));
    }

    @GetMapping("/allPaniers")
    public ResponseEntity<List<Panier>> getAllPaniers() {
        return ResponseEntity.ok(panierService.getAll());
    }

    @GetMapping("/findPanierByUtilisateurId/{utilisateurId}")
    public ResponseEntity<Panier> getPanierByUtilisateurId(@PathVariable Long utilisateurId) {
        return ResponseEntity.ok(panierService.getByUtilisateurId(utilisateurId));
    }

    @PutMapping("recalculerTotalPanier/{panierId}")
    public ResponseEntity<Void> recalculerTotal(@PathVariable Long panierId) {
        panierService.recalculerTotal(panierId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/viderPanier/{panierId}")
    public ResponseEntity<Void> viderPanier(@PathVariable Long panierId) {
        panierService.viderPanier(panierId);
        return ResponseEntity.ok().build();
    }

}
