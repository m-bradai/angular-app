import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-detail-dialog',
  template: `
<h2 mat-dialog-title>Payment Details</h2>
<mat-dialog-content>
  <p><strong>Id:</strong> {{data.id}}</p>
  <p><strong>Reference:</strong> {{data.reference}}</p>
  <p><strong>Amount:</strong> {{data.amount}} {{data.currency}}</p>
  <p><strong>Currency:</strong> {{data.currency}}</p>
  <p><strong>Method:</strong> {{data.method}}</p>
  <p><strong>Payment method:</strong> {{data.paymentMethod}}</p>
  <p><strong>Status:</strong> {{data.status}}</p>
  <p><strong>Description:</strong> {{data.description}}</p>

</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Close</button>
</mat-dialog-actions>
`
})
export class PaymentDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
