import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitModule } from './produit.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FactureligneproduitModule {
  factureclientId: number;
  produitId: number;
  quantite: number;
  produit: ProduitModule;
 }
