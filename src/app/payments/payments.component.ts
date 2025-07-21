import {Component, OnInit} from '@angular/core';
import {Payment} from "./payment.model";
import {PaymentsService} from "./payments.service";
import {MatDialog} from "@angular/material/dialog";
import {PaymentDetailDialogComponent} from "./payment-detail-dialog/payment-detail-dialog.component";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{

  payments: Payment[] = [];

  displayedColumns: string[] = ['reference', 'amount', 'currency', 'method', 'status'];

  constructor(private paymentsService : PaymentsService, private dialog: MatDialog) {}


  ngOnInit() {
    this.paymentsService.getPayments().subscribe({
      next: (data)=> this.payments=data,
      error:(err)=> alert(JSON.stringify(err))
    })
    // TODO : understand how to use RxJS transformations map, filter ,etc..
  }

  openPaymentDialog(payment: Payment) {
    this.dialog.open(PaymentDetailDialogComponent, {
      width: '400px',
      data: payment
    });
  }

}
