import {Component, OnInit} from '@angular/core';
import {Payment} from "./payment.model";
import {PaymentsService} from "./payments.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  payments: Payment[] = [];

  constructor(private paymentsService : PaymentsService) {
  }

  ngOnInit() {
    this.paymentsService.getPayments().subscribe({
      next: (data)=> this.payments=data,
      error:(err)=> alert(JSON.stringify(err))
      // TODO : why to export module HttpClientModule to be able to use HttClient ?
    })
  }


}
