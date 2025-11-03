package com.nigelle.ecommerceback.controller;


import com.nigelle.ecommerceback.entities.DetailPanier;
import com.nigelle.ecommerceback.service.DetailPanierService;
import com.nigelle.ecommerceback.service.IDetailPanierService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DetailPanier")
@AllArgsConstructor
public class DetailPanierContoller {
    private final IDetailPanierService detailPanierService;

    @PostMapping("/addDetailPanier")
    public ResponseEntity<DetailPanier> createDetailPanier(@RequestBody DetailPanier DetailPanier) {
        return ResponseEntity.ok(detailPanierService.create(DetailPanier));
    }


    @PutMapping("/updateDetailPanier")
    public ResponseEntity<DetailPanier> updateDetailPanier(@RequestBody DetailPanier DetailPanier) {
        return ResponseEntity.ok(detailPanierService.update(DetailPanier));
    }

    @DeleteMapping("/deleteDetailPanier/{id}")
    public ResponseEntity<Void> deleteDetailPanier(@PathVariable Long id) {
        detailPanierService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/findDetailPanier/{id}")
    public ResponseEntity<DetailPanier> getDetailPanierById(@PathVariable Long id) {
        return ResponseEntity.ok(detailPanierService.getById(id));
    }

    @GetMapping("/AllLignesPanier")
    public ResponseEntity<List<DetailPanier>> getAllLignesPanier() {
        return ResponseEntity.ok(detailPanierService.getAll());
    }

    @GetMapping("finddDetailPanierByPanier/{id}")
    public ResponseEntity<List<DetailPanier>> getDetailPanierByPanier(@PathVariable Long id) {
        return ResponseEntity.ok(detailPanierService.getByPanierId(id));
    }


}
