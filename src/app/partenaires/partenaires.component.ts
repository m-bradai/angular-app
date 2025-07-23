import {Component, OnInit} from '@angular/core';
import {Partenaire} from "./interface/partenaire.model";
import {PartenairesService} from "./partenaires.service";
import {MatDialog} from "@angular/material/dialog";
import {PartenaireDetailsDialogComponent} from "./partenaire-details-dialog/partenaire-details-dialog.component";
import {PartenaireAddDialogComponent} from "./partenaire-add-dialog/partenaire-add-dialog.component";

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})

export class PartenairesComponent implements OnInit {

  constructor( private partenairesService:PartenairesService, private dialog:MatDialog) {
  }

  displayedColumns: string[] = ['id','alias','type','direction','application'];

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

  }
