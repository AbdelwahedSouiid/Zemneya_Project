import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Panier} from "../../models/Panier";
import {DetailPanier} from "../../models/DetailPanier";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private url = environment.url + "/Panier";

  panier!:Panier;

  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Paniers
  getPaniers(): Observable<Panier[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Panier[]>(this.url + '/allPaniers', {headers});
  }

  // Ajouter un Panier
  addPanier(Panier: Panier): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/addPanier', Panier, {headers});
  }

  // Récupérer un Panier par ID
  getPanierById(id: number): Observable<Panier> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Panier>(`${this.url}/findPanierById/${id}`, {headers});
  }

  // Mettre à jour un Panier
  updatePanier(id: string, Panier: Panier): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/updatePanier/${id}`, Panier, {headers});
  }

  // Supprimer un Panier
  deletePanier(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/deletePanier/${id}`, {headers});
  }


  ajouterAuPanier(item: { produit: any; variation: any; quantite: number }): void {
    const existingDetail = this.panier.detailPanier.find(
      detail => detail.variation.id === item.variation.id
    );

    if (existingDetail) {
      existingDetail.quantite += item.quantite;
      existingDetail.sousTotal = existingDetail.quantite * item.variation.prixUnitaire;

      // Supprimer si la quantité devient 0 ou moins
      if (existingDetail.quantite <= 0) {
        this.panier.detailPanier = this.panier.detailPanier.filter(detail => detail !== existingDetail);
      }
    } else if (item.quantite > 0) {
      const newDetail = new DetailPanier();
      newDetail.quantite = item.quantite;
      newDetail.sousTotal = item.quantite * item.variation.prixUnitaire;
      newDetail.variation = item.variation;
      newDetail.panier = this.panier;

      this.panier.detailPanier.push(newDetail);
    }

    // Mettre à jour le total du panier
    this.updateTotal();
  }

  getPanier(): DetailPanier[] {
    return this.panier.detailPanier;
  }

  private updateTotal(): void {
    this.panier.total = this.panier.detailPanier.reduce((sum, detail) => sum + detail.sousTotal, 0);
  }

}
