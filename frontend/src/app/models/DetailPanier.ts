import {Panier} from "./Panier";
import {Variation} from "./Variation";
import {Commande} from "./Commande";

export class DetailPanier {
  id!: number;

  quantite!: number;
  sousTotal: number = 0;
  panier!:Panier;
  variation!:Variation;
  commande!:Commande;
}
