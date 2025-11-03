import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Commande} from "../../models/Commande";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url = environment.url + "/Commande";


  constructor(private http: HttpClient) {
  }

  // Ajouter un Commande
  addCommande(commande: Commande): Observable<Commande> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Commande>(this.url + '/addCommande', commande, {headers});
  }

}
