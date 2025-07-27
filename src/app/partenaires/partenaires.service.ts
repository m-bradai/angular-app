import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Partenaire} from "./interface/partenaire.model";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  constructor(private httpClient: HttpClient){}

  private baseUrl = 'http://localhost:8080/api/v1';

  private getPartenairesPath = '/partenaires';

  private addPartenairePath = '/addPartenaire';

  private deletePartenairePath = '/deletePartenaire'

  getPartenaires():Observable<Partenaire[]> {
    return this.httpClient.get<Partenaire[]>(this.baseUrl + this.getPartenairesPath);
  }

  addPartenaire(partenaire: Partenaire):Observable<HttpResponse<Partenaire>>{
    return this.httpClient.post<Partenaire>(this.baseUrl + this.addPartenairePath, partenaire,{observe:'response'});
  }

  deletePartenaire(partenaire:Partenaire):Observable<HttpResponse<Object>> {
    return this.httpClient.delete(this.baseUrl + this.deletePartenairePath, {observe:'response', params:{id:partenaire.id as number} }  )
  }
}
