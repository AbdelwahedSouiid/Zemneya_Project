package com.nigelle.ecommerceback.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom; // Nom de l'utilisateur
    private String prenom; // Prénom de l'utilisateur
    private String email; // Adresse email
    private String password; // Mot de passe
    private String phoneNumber; // Numéro de téléphone
    private String photo; // URL ou chemin de la photo de profil
    private String genre; // Genre : masculin/féminin/autre

    @Temporal(TemporalType.DATE)
    private Date dateInscription; // Date d'inscription

    @Temporal(TemporalType.DATE)
    private Date dateNaissance; // Date de naissance

    private boolean isBlocked; // Indique si l'utilisateur est bloqué

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateConnexion; // Date de la dernière connexion

    private Long duree; // Durée de connexion (en secondes, minutes, etc.)

    private String etat; // État de l'utilisateur : actif/inactif/etc.

}