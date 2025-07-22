import {Partenaire} from "./partenaire.model";

export interface AddPartenaireResponse {
  code:number
  status:string
  partenaire:Partenaire
}
