import {DetailPanier} from "./DetailPanier";
import {AppUser} from "./AppUser";

export class Commande {

  id!: number;
  details!: DetailPanier[];
  montantTotal!: number;
}
