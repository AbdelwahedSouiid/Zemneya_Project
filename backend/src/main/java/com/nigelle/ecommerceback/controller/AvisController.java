package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Avis;
import com.nigelle.ecommerceback.service.IAvisService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Avis")
public class AvisController {
    private final IAvisService service;
    public AvisController(IAvisService AvisService) {
        this.service = AvisService;
    }
    @GetMapping("/allAviss")
    public List<Avis> getAllAviss() {
        return service.getAll();
    }

    @PostMapping("/addAvis")
    public Avis createAvis(@RequestBody Avis Avis) {
        return service.create(Avis);
    }

    @PutMapping("/updateAvis")
    public Avis updateAvis(@RequestBody Avis Avis) {
        return service.update(Avis);
    }

    @DeleteMapping("/deleteAvis/{id}")
    public void deleteAvis(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findAvisById/{id}")
    public Avis getAvisById(@PathVariable Long id) {
        return service.getById(id);
    }
}
