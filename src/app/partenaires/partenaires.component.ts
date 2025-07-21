import {Component, OnInit} from '@angular/core';
import {Partenaire} from "./partenaire.model";
import {PartenairesService} from "./partenaires.service";
import {MatDialog} from "@angular/material/dialog";
import {PartenaireDetailsDialogComponent} from "./partenaire-details-dialog/partenaire-details-dialog.component";

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
    this.dialog.open(PartenaireDetailsDialogComponent,{width:'100%', data:partenaire})
  }



}
