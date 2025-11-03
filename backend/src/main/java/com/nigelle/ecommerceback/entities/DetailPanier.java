package com.nigelle.ecommerceback.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailPanier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Panier panier;

    @OneToOne
    private Variation variation; // Référence à une variation spécifique d'un produit
    @ManyToOne
    private Commande commandee;
    private int quantite;
    private double sousTotal;

}
