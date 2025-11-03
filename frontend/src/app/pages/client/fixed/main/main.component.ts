import { Component, OnInit } from '@angular/core';
import {Panier} from "../../../../models/Panier";
import {PanierService} from "../../../../services/panier/panier.service";
import {DetailPanierService} from "../../../../services/detailPanier/detail-panier.service";
import {DetailPanier} from "../../../../models/DetailPanier";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // Notez ici la correction de "styleUrl" en "styleUrls"
})
export class MainComponent implements OnInit {
  panier!: Panier;
  constructor(private panierService:PanierService,private detailPanierService:DetailPanierService) {}

  ngOnInit(): void {
    this.fetchAndSavePanier(1);
    this.displayPanier();
  }
  // Récupérer le panier depauis la base de données et le stocker dans localStorage
  fetchAndSavePanier(panierId: number): void {
    this.panierService.getPanierById(panierId).subscribe(
      (data: Panier) => {
        this.panier = data;
        localStorage.setItem('panier', JSON.stringify(this.panier));
      },
      (error) => {
        console.error('Erreur lors de la récupération du panier :', error);
      }
    );
  }


  // Afficher le contenu du panier (pour debug ou affichage)
  displayPanier(): void {
    console.log("Panier actuel :", this.panier);
  }
}
