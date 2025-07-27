import {Component, OnInit} from '@angular/core';
import {Partenaire} from "./interface/partenaire.model";
import {PartenairesService} from "./partenaires.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PartenaireDetailsDialogComponent} from "./partenaire-details-dialog/partenaire-details-dialog.component";
import {PartenaireAddDialogComponent} from "./partenaire-add-dialog/partenaire-add-dialog.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog-component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})

export class PartenairesComponent implements OnInit {

  constructor( private partenairesService:PartenairesService, private dialog:MatDialog, private snackBar:MatSnackBar) {
  }

  displayedColumns: string[] = ['id','alias','type','direction','application', 'actions'];

  partenaires: Partenaire[] = [];


  ngOnInit(): void {
    this.partenairesService.getPartenaires().subscribe({
      next:(data)=>this.partenaires = data,
      error:(err)=> alert(JSON.stringify(err))
    })

  }

  openDetailsDialog(partenaire: Partenaire){
    this.dialog.open(PartenaireDetailsDialogComponent,{width:'400px', data:partenaire})
  }

  /** Opens the Add Partner dialog */
  openAddPartnerDialog(): void {
    const dialogRef = this.dialog.open(PartenaireAddDialogComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((newPartner: Partenaire) => {
      if (newPartner) {
        this.partenaires = [...this.partenaires, newPartner]; // TODO : does the update of this.partenaires updates the template ?
        console.log('New partner added:', newPartner);
      }
    });
  }

  onDelete(partenaire: Partenaire){
   const dialogRef:MatDialogRef<ConfirmationDialogComponent> = this.dialog.open(ConfirmationDialogComponent,
     { width:'400px', data:{message:'Would you like really to delete partenaire:' + partenaire.alias }});

   dialogRef.afterClosed().subscribe((value)=>{
     if(value){
       this.partenairesService.deletePartenaire(partenaire).subscribe({
         next:(httpRespose)=>{
           if(httpRespose.status == HttpStatusCode.NoContent){
             this.snackBar.open('Partenaire deleted.', 'Close', {
               duration: 3000,
               horizontalPosition: 'center',
               verticalPosition: 'top',
               panelClass: ['success-snackbar']
             });

             this.partenaires = this.partenaires.filter(p=> p.id !== partenaire.id)

           } else {
             this.snackBar.open('Error: partanaire not deleted.', 'Close', {
               duration: 5000,
               horizontalPosition: 'center',
               verticalPosition: 'top',
               panelClass: ['error-snackbar']
             });
           }
         },

         error:(error)=> {
           this.snackBar.open('Technical error', 'Close', {
             duration: 5000,
             horizontalPosition: 'center',
             verticalPosition: 'top',
             panelClass: ['error-snackbar']
           });
         }

       })
     } else {

     }
   })
  }

  }
