import {Produit} from "./Produit";
import {SousCategorie} from "./SousCategorie";


export class Categorie {

  id!: number;
  nom!: string;
  description!: string;
  image!: string;
  sousCategories!: SousCategorie[];
}
