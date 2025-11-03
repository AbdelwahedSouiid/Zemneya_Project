package com.nigelle.ecommerceback.controller;

import com.nigelle.ecommerceback.entities.Commande;
import com.nigelle.ecommerceback.service.ICommandeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/Commande")
public class CommandeController {

    private ICommandeService commandeService;

    @PostMapping("/addCommande")
    public Commande create(@RequestBody Commande commande) {
        return commandeService.create(commande);
    }
}
