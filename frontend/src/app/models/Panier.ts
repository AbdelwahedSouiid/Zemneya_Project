import {DetailPanier} from "./DetailPanier";
import {AppUser} from "./AppUser";

export class Panier {
  id!: number;
  detailPanier: DetailPanier[] = [];
  total: number = 0;
}
