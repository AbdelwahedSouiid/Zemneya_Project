import { Component } from '@angular/core';
import {PanierService} from "../../../services/panier/panier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-achat-confirmation',
  templateUrl: './achat-confirmation.component.html',
  styleUrl: './achat-confirmation.component.css'
})
export class AchatConfirmationComponent {
  currentPanier: any;
  shippingAddress: string = ''; // L'adresse de livraison
  paymentMethod: string = ''; // Méthode de paiement (par exemple, carte bancaire, PayPal)
  user: any; // L'utilisateur qui passe la commande

  constructor(
    private cartService: PanierService,

    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer les informations du panier
    this.currentPanier = this.cartService.getPanier();

  }

  // Fonction pour valider la commande
  validateOrder(): void {
    if (!this.currentPanier || this.currentPanier.detailPanier.length === 0) {
      alert("Votre panier est vide, vous ne pouvez pas valider la commande.");
      return;
    }

    if (!this.shippingAddress) {
      alert("Veuillez renseigner une adresse de livraison.");
      return;
    }

    if (!this.paymentMethod) {
      alert("Veuillez choisir une méthode de paiement.");
      return;
    }
  }
}
