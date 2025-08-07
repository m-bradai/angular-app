import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payment} from "./payment.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private apiUrl = 'http://localhost:8087/api/v1/payments';

  constructor(private http : HttpClient) { }

  getPayments():Observable<Payment[]> {
     return this.http.get<Payment[]>(this.apiUrl);
  }

}
