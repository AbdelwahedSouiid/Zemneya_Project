import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailPanier} from "../../models/DetailPanier";


@Injectable({
  providedIn: 'root'
})
export class DetailPanierService {

  private url = environment.url + "/DetailPanier";


  constructor(private http: HttpClient) {
  }

  // Récupérer tous les DetailPaniers
  getDetailPaniers(): Observable<DetailPanier[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<DetailPanier[]>(this.url + '/allDetailPaniers', {headers});
  }

  // Ajouter un DetailPanier
  addDetailPanier(DetailPanier: DetailPanier): Observable<DetailPanier> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<DetailPanier>(this.url + '/addDetailPanier', DetailPanier, {headers});
  }

  // Récupérer un DetailPanier par ID
  getDetailPanierById(id: number): Observable<DetailPanier> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<DetailPanier>(`${this.url}/findDetailPanierById/${id}`, {headers});
  }

  // Mettre à jour un DetailPanier
  updateDetailPanier(id: number, DetailPanier: DetailPanier): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/updateDetailPanier/${id}`, DetailPanier, {headers});
  }

  // Supprimer un DetailPanier
  deleteDetailPanier(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.url}/deleteDetailPanier/${id}`, {headers});
  }

  getDetailPanierByPanier(id: number): Observable<DetailPanier[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<DetailPanier[]>(`${this.url}/finddDetailPanierByPanier/${id}`, {headers});
  }

}
