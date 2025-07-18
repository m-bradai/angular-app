import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Payment} from "./payment.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private apiUrl = 'http://localhost:8080/api/v1/payments';

  constructor(private http : HttpClient) { }

  getPayments():Observable<Payment[]> {
    const paymentObservable =  this.http.get<Payment[]>(this.apiUrl);
    return paymentObservable;
  }

}
