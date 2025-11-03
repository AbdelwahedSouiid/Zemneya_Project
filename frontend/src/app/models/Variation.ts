import {Produit} from "./Produit";

export class Variation {

  id!: number;
  taille!: string;
  prixUnitaire!:number;

  quantiteDisponible!:number;

  produit!: Produit;
}
