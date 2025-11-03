import { Component, OnInit } from '@angular/core';
import { ProduitService } from "../../../services/produit/produit.service";
import { Produit } from "../../../models/Produit";
import { ActivatedRoute, Router } from "@angular/router";
import {PanierService} from "../../../services/panier/panier.service";
import {VariationService} from "../../../services/variation/variation.service";
import {Variation} from "../../../models/Variation";
import {DetailPanier} from "../../../models/DetailPanier";
import {Panier} from "../../../models/Panier";
import {DetailPanierService} from "../../../services/detailPanier/detail-panier.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Commande} from "../../../models/Commande";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  panier!: Panier;
  detailPanier!:DetailPanier;
  currentProduit!: Produit;
  selectedVariation!:number ;  // To store the selected variation
  quantity: number = 1;
  variations: Variation[]= [];

  constructor(
    private produitService: ProduitService,
    private variationService: VariationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: PanierService ,
    private detailPanierService: DetailPanierService
  ) {
    this.detailPanier = {
      id: 0,
      quantite: 1,
      sousTotal: 0,
      panier: {} as Panier,  // ou utilisez une valeur initiale valide
      variation: {} as Variation , // si nécessaire
      commande:{} as Commande
    }
  }


  ngOnInit(): void {
    this.loadPanierFromSession();
    this.loadCurrentProduit();
  }

  loadCurrentProduit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let idProduit = params.get('id')!;
      this.produitService.getProduitById(idProduit).subscribe(cour => {
        this.currentProduit = cour;
        // Charger les variations après avoir récupéré le produit
        this.loadCurrentVariation();
      });
    });
  }

  loadPanierFromSession(): void {
    const savedPanier = localStorage.getItem('panier');
    if (savedPanier) {
      this.panier = JSON.parse(savedPanier);
    } else {
      console.log('Aucun panier trouvé dans localStorage.');
    }
  }

  loadCurrentVariation(): void {
    if (this.currentProduit && this.currentProduit.id) {
      this.variationService.getAllVariationByProductId(this.currentProduit.id).subscribe(variations => {
        this.variations = variations;
      });
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  setDetailPanier(): void {
    if(!this.variations){
      if (!this.selectedVariation) {
        alert("Veuillez sélectionner une variation avant d'ajouter au panier.");
        return;
      }
    }
    // Charger la variation
    this.variationService.getVariationById(this.selectedVariation).subscribe(
      variation => {
        this.detailPanier.variation = variation;
        this.detailPanier.panier = this.panier;
        // Calculer le sous-total
        this.detailPanier.sousTotal = this.quantity * variation.prixUnitaire;
        this.detailPanier.quantite = this.quantity;
        // Récupérer le panier depuis localStorage
        let panierFromLocalStorage = localStorage.getItem('panier');
        if (panierFromLocalStorage) {
          let panier: Panier = JSON.parse(panierFromLocalStorage);

          // Ajouter le détail au panier
          if (!panier.detailPanier) {
            panier.detailPanier = []; // Initialiser si inexistant
          }
          panier.detailPanier.push(this.detailPanier);

          // Mettre à jour le panier dans localStorage
          localStorage.setItem('panier', JSON.stringify(panier));

          console.log("Détail ajouté avec succès :", this.detailPanier);
          console.log("Panier mis à jour :", panier);
          this.router.navigate(['/panier']);
        } else {
          console.error("Aucun panier trouvé dans localStorage.");
        }
      },
      error => {
        console.error("Erreur lors de la récupération de la variation :", error);
      }
    );
  }




}
