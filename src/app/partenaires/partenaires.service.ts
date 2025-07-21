import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Partenaire} from "./partenaire.model";
import {HttpClient} from "@angular/common/http";
import {Payment} from "../payments/payment.model";

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  constructor(private httpClient: HttpClient){}

  private url = 'http://localhost:8080/api/v1/partenaires';

  getPartenaires():Observable<Partenaire[]> {
    return this.httpClient.get<Partenaire[]>(this.url);
  }
}
