import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../models/Produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = environment.url + "/Produit";


  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Produits
  getProduits(): Observable<Produit[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Produit[]>(this.url + '/allProduits', {headers});
  }

  // Ajouter un Produit
  addProduit(Produit: Produit): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/addProduit', Produit, {headers});
  }



  // Mettre à jour un Produit
  updateProduit(id: string, Produit: Produit): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/updateProduit/${id}`, Produit, {headers});
  }

  // Supprimer un Produit
  deleteProduit(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/deleteProduit/${id}`, {headers});
  }
  // Récupérer un Produit par ID
  getProduitById(id: string): Observable<Produit> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Produit>(`${this.url}/findProduitById/${id}`, {headers});
  }


  search(params: {
    category?: string;
    name?: string;  }): Observable<Produit[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const options = {
      headers: headers,
      params: params
    };
    // Appeler l'API avec les options
    return this.http.get<Produit[]>(`${this.url}/search`, options);
  }

}
