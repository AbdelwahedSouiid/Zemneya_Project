package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Variation;
import com.nigelle.ecommerceback.service.IVariationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/Variation")
public class VariationController {
    private final IVariationService service;

    public VariationController(IVariationService service) {
        this.service = service;
    }

    @GetMapping("/allVariations")
    public List<Variation> getAllVariations() {
        return service.getAll();
    }

    @PostMapping("/addVariation")
    public Variation createVariation(@RequestBody Variation Variation) {
        return service.create(Variation);
    }

    @PutMapping("/updateVariation")
    public Variation updateVariation(@RequestBody Variation Variation) {
        return service.update(Variation);
    }

    @DeleteMapping("/deleteVariation/{id}")
    public void deleteVariation(@PathVariable Long id) {
        service.deleteById(id);
    }

    @GetMapping("/findVariationById/{id}")
    public Variation getVariationById(@PathVariable Long id) {
        return service.getById(id);
    }
    @GetMapping("/findVariationByProduct/{id}")
    public List<Variation> getAllVariationByProductId(@PathVariable Long id) {
        return service.getAllVariationByProductId(id);
    }
}
