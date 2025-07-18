import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentsComponent} from "./payments/payments.component";
import {PartenairesComponent} from "./partenaires/partenaires.component";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path:'payments', component:PaymentsComponent},
  {path:'partenaires', component:PartenairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
