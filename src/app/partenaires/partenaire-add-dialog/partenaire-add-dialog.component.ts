import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {PartenairesService} from "../partenaires.service";
import {Partenaire} from "../interface/partenaire.model";
import {HttpStatusCode} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-partenaire-add-dialog',
  template: `<h2 mat-dialog-title>Add Partenaire</h2>
    <mat-dialog-content>
    <form [formGroup]="partenaireForm" class="partenaire-form" style="display: flex; flex-direction: column; gap: 16px;">
      <mat-form-field appearance="outline">
        <mat-label>Alias</mat-label>
        <input matInput formControlName="alias" placeholder="Partner alias">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Type</mat-label>
        <mat-select formControlName="type">
          <mat-option value="INTERNAL">Internal</mat-option>
          <mat-option value="EXTERNAL">External</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Direction</mat-label>
        <mat-select formControlName="direction">
          <mat-option value="INBOUND">Inbound</mat-option>
          <mat-option value="OUTBOUND">Outbound</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Application</mat-label>
        <input matInput formControlName="application" placeholder="Application name">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Processed Flow Type</mat-label>
        <input matInput formControlName="processedFlowType" placeholder="Flow type">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Description</mat-label>
        <input matInput formControlName="description" placeholder="Description">
      </mat-form-field>
    </form>
  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>Cancel</button>
    <button mat-raised-button color="primary" (click)="onSubmit()" [disabled]="partenaireForm.invalid">
      Add
    </button>
  </mat-dialog-actions>`,
  styleUrls:['partenaire-add-dialog.component.css']
})

export class PartenaireAddDialogComponent {

  partenaireForm: FormGroup;

  constructor(
    private partenaireService: PartenairesService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PartenaireAddDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.partenaireForm = this.fb.group({
      alias: ['', Validators.required],
      type: ['',Validators.required],
      direction: ['',Validators.required],
      application: ['',Validators.required],
      processedFlowType: ['',Validators.required],
      description: ['']
    });
  }

  onSubmit(){
    const partenaire: Partenaire =
      {
        id:null,
        alias: this.partenaireForm.get('alias')?.value,
        type: this.partenaireForm.get('type')?.value,
        direction: this.partenaireForm.get('direction')?.value,
        application: this.partenaireForm.get('application')?.value,
        processedFlowType: this.partenaireForm.get('processedFlowType')?.value,
        description: this.partenaireForm.get('description')?.value,
        createdAt:null,
        updatedAt: null
      }

      this.partenaireService.addPartenaire(partenaire).subscribe(
        {
          next: (response)=> {
            if(response.status == HttpStatusCode.Created){
              // this.confirmationDialog.open(ConfirmationDialogComponent,{width:'400px',data:{message:'Partenaire added successfully.'}},)
              this.snackBar.open('Partenaire added successfully!', 'Close', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['snackbar-success']
              });
            }else{
              this.snackBar.open('Failed to add partenaire. Please try again.', 'Close', {
                duration: 4000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['snackbar-error']
              });
            }
            this.dialogRef.close(response.body);
          },
          error:(error)=>{
            this.snackBar.open('Failed to add partenaire. Please try again.', 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['snackbar-error'],
            });
            console.log('error: ' + error)
            this.dialogRef.close()

          }
        }
      );

  }

}
