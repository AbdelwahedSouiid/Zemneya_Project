package com.nigelle.ecommerceback.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Avis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int note;
    private String commentaire;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAvis;
    @ManyToOne
    private Produit produit;
    @ManyToOne
    private AppUser user;
}