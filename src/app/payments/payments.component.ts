import { Component } from '@angular/core';
import {Payment} from "./payment.model";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  payments: Payment[] = [
    {
      id:'1',
      reference: 'REF001',
      amount: '100.00',
      currency: 'USD',
      method: 'Card',
      status: 'Completed',
      paymentMethod: 'Visa',
      description: 'Order #123'
    },
    {
      id:'2',
      reference: 'REF002',
      amount: '250.00',
      currency: 'EUR',
      method: 'Transfer',
      status: 'Pending',
      paymentMethod: 'Bank Transfer',
      description: 'Invoice #456'
    }
  ];
}
