import {Component, OnInit} from '@angular/core';
import {Partenaire} from "./partenaire.model";
import {PartenairesService} from "./partenaires.service";

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor( private partenairesService:PartenairesService) {
  }

  displayedColumns: string[] = ['Id','Alias','Type','Direction','Application'];

  partenaires: Partenaire[] = [];

  ngOnInit(): void {

    this.partenairesService.getPartenaires().subscribe({

    })

  }



}
