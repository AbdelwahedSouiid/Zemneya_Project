import { Component, OnInit } from '@angular/core';
import { PanierService } from "../../../services/panier/panier.service";
import {Panier} from "../../../models/Panier";
import {DetailPanier} from "../../../models/DetailPanier";
import {DetailPanierService} from "../../../services/detailPanier/detail-panier.service";
import {CommandeService} from "../../../services/commande/commande.service";
import {Commande} from "../../../models/Commande";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'] // Correction : `styleUrl` -> `styleUrls`
})
export class PanierComponent implements OnInit {

  currentPanier!:Panier;
  currentCommande!:Commande;

  constructor(private cartService: PanierService,private detailPanierService: DetailPanierService,private commmandeService:CommandeService) {}

  ngOnInit(): void {
   this.getPanier();
  }

  getPanier(): void {
    const savedPanier = localStorage.getItem('panier');
    if (savedPanier) {
      this.currentPanier = JSON.parse(savedPanier);
    } else {
      console.log('Aucun panier trouvé dans localStorage.');
    }
  }

  addCommande(): void {
    // Vérifier si le panier actuel existe et contient des articles
    if (this.currentPanier && this.currentPanier.detailPanier.length > 0) {
      // Créer une commande avec les informations nécessaires
      const nouvelleCommande: Commande = {
        id: 0,
        details: this.currentPanier.detailPanier, // Liste des détails du panier
        montantTotal: this.calculateTotal(), // Montant total calculé
      };

      // Enregistrer la commande via le service
      this.commmandeService.addCommande(nouvelleCommande).subscribe(
        (commandeEnregistree) => {
          console.log("Commande enregistrée avec succès :", commandeEnregistree);

          // Associer chaque détail du panier à la commande enregistrée
          this.currentPanier.detailPanier.forEach((detail) => {
            detail.commande = commandeEnregistree; // Associer la commande
            this.detailPanierService.addDetailPanier(detail).subscribe(
              (detailEnregistre) => {
                console.log("Détail du panier enregistré :", detailEnregistre);
              },
              (erreur) => {
                console.error("Erreur lors de l'enregistrement d'un détail :", erreur);
              }
            );
           this.removeFromCart(detail.id) ;
          });


          alert("Votre commande a été validée avec succès !");
        },
        (error) => {
          console.error("Erreur lors de l'enregistrement de la commande :", error);
          alert("Une erreur s'est produite lors de la validation de votre commande.");
        }
      );
    } else {
      console.warn("Le panier est vide. Impossible de valider une commande.");
      alert("Votre panier est vide. Ajoutez des articles avant de valider la commande.");
    }
  }

  // Diminuer la quantité
  decreaseQuantity(item: any): void {
    if (item.quantite > 1) {
      item.quantite--;
    } else {
      this.removeFromCart(item); // Supprimer si la quantité devient 0
    }
  }

  // Augmenter la quantité
  increaseQuantity(item: any): void {
    item.quantite++;
  }
  // Fonction pour calculer le sous-total
  calculateSubtotal(): number {
    let subtotal = 0;
    this.currentPanier.detailPanier.forEach(item => {
      subtotal += item.variation.prixUnitaire * item.quantite;
    });
    return subtotal;
  }

  // Fonction pour calculer le total (avec expédition)
  calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    const shippingCost = 3.00; // Coût d'expédition fixe
    return subtotal + shippingCost;
  }

  removeFromCart(id: number): void {
    // Récupérer le panier depuis localStorage
    let panierFromLocalStorage = localStorage.getItem('panier');
    if (panierFromLocalStorage) {
      let panier: Panier = JSON.parse(panierFromLocalStorage);

      // Vérifier si detailPanier existe et contient des éléments
      if (panier.detailPanier && panier.detailPanier.length > 0) {
        // Supprimer le détail correspondant à l'id
        let initialLength = panier.detailPanier.length;
        panier.detailPanier = panier.detailPanier.filter(item => item.id !== id);

        if (panier.detailPanier.length < initialLength) {
          // Mettre à jour le panier dans localStorage
          localStorage.setItem('panier', JSON.stringify(panier));

          console.log("Détail supprimé avec succès. ID :", id);
          console.log("Panier mis à jour :", panier);
          alert("Détail du panier supprimé avec succès.");
        } else {
          console.warn("Aucun détail trouvé avec l'ID :", id);
        }
      } else {
        console.error("Le panier ne contient aucun détail à supprimer.");
      }
    } else {
      console.error("Aucun panier trouvé dans localStorage.");
    }

    // Mettre à jour l'affichage ou effectuer une autre action
    this.getPanier();
  }

}
