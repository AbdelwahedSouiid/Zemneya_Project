import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Variation} from "../../models/Variation";

@Injectable({
  providedIn: 'root'
})
export class VariationService {

  private url = environment.url + "/Variation";


  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Variations
  getVariations(): Observable<Variation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Variation[]>(this.url + '/allVariations', {headers});
  }

  // Ajouter un Variation
  addVariation(Variation: Variation): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/addVariation', Variation, {headers});
  }

  // Récupérer un Variation par ID
  getVariationById(id: number): Observable<Variation> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Variation>(`${this.url}/findVariationById/${id}`, {headers});
  }

  // Mettre à jour un Variation
  updateVariation(id: number, Variation: Variation): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/updateVariation/${id}`, Variation, {headers});
  }

  // Supprimer un Variation
  deleteVariation(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/deleteVariation/${id}`, {headers});
  }
  // Récupérer un Variation par ID
  getAllVariationByProductId(id: number): Observable<Variation[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Variation[]>(`${this.url}/findVariationByProduct/${id}`, {headers});
  }
}
