import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../models/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url = environment.url + "/Categorie";


  constructor(private http: HttpClient) {
  }

  // Récupérer tous les Categories
  getCategories(): Observable<Categorie[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Categorie[]>(this.url + '/allCategories', {headers});
  }

  // Ajouter un Categorie
  addCategorie(Categorie: Categorie): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + '/addCategorie', Categorie, {headers});
  }

  // Récupérer un Categorie par ID
  getCategorieById(id: string): Observable<Categorie> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Categorie>(`${this.url}/findCategorieById/${id}`, {headers});
  }

  // Mettre à jour un Categorie
  updateCategorie(id: string, Categorie: Categorie): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/updateCategorie/${id}`, Categorie, {headers});
  }

  // Supprimer un Categorie
  deleteCategorie(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/deleteCategorie/${id}`, {headers});
  }

}
