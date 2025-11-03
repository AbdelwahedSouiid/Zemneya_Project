package com.nigelle.ecommerceback.service;


import com.nigelle.ecommerceback.Repository.CommandeRepository;
import com.nigelle.ecommerceback.entities.Commande;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CommandeService  implements ICommandeService {

    private CommandeRepository commandeRepository;

    @Override
    public Commande create(Commande entity) {
        return commandeRepository.save(entity);
    }

    @Override
    public Commande update(Commande entity) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public Commande getById(Long id) {
        return null;
    }

    @Override
    public List<Commande> getAll() {
        return List.of();
    }
}
