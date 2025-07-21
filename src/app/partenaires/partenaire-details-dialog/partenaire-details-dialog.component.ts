import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Partenaire} from "../partenaire.model";

@Component({
  selector: 'app-partenaire-details-dialog',
  template: `
    <h2 mat-dialog-title>Payment Details</h2>
  <mat-dialog-content>
    <p><strong>Id:</strong> {{data.id}}</p>
    <p><strong>Alias:</strong> {{data.alias}}</p>
    <p><strong>Type:</strong> {{data.type}}</p>
    <p><strong>Direction:</strong> {{data.direction}}</p>
    <p><strong>Application:</strong> {{data.application}}</p>
    <p><strong>Processed flow type:</strong> {{data.processedFlowType}}</p>
    <p><strong>Created at:</strong> {{data.createdAt}}</p>
    <p><strong>Updated at:</strong> {{data.updatedAt}}</p>

</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Close</button>
</mat-dialog-actions>
`
})
export class PartenaireDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}



