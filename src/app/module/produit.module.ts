import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { 
  id?: number;
  codebar?: number;
  nom?: string;
  qteInPacket?: number;
  article?: string;
  color?: string;
  description?: string;
  categorieid?: number;
  quantiteStockMin?: number;
  quantiteStockmax?: number;
  prixFournisseur?: number;
  prixventemin?: number;
  prixvente?: number;
  stock?: number;
  reductionprix?: number;
  dateexpiration?: Date;
  image?: string;

}
