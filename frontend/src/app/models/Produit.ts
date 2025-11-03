import {Avis} from "./Avis";
import {Categorie} from "./Categorie";
import {Variation} from "./Variation";


export class Produit {

  id!: number;
  nom!: string;
  description!: string;
  image!: string;
  quantite!:number;
  prix!:number;
  categorie!: Categorie;

  variations!: Variation[];
}


