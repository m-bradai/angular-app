import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Partenaire} from "./interface/partenaire.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Payment} from "../payments/payment.model";
import {AddPartenaireResponse} from "./interface/add.partenaire.response";

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  constructor(private httpClient: HttpClient){}

  private baseUrl = 'http://localhost:8080/api/v1';

  private getPartenairesPath = '/partenaires';

  private addPartenairePath = '/addPartenaire';

  getPartenaires():Observable<Partenaire[]> {
    return this.httpClient.get<Partenaire[]>(this.baseUrl + this.getPartenairesPath);
  }

  addPartenaire(partenaire: Partenaire):Observable<HttpResponse<Partenaire>>{
    return this.httpClient.post<Partenaire>(this.baseUrl + this.addPartenairePath, partenaire,{observe:'response'})
  }
}
