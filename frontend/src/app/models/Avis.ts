import {Produit} from "./Produit";
import {AppUser} from "./AppUser";

export class Avis {

  id!: number;
  note!:number;
  commentaire!: string;
  dateAvis!:Date;
  produit!:Produit;
  user!:AppUser;
}
