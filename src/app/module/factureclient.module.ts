import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureligneproduitModule } from './factureligneproduit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FactureclientModule {

          id: number;
          datefacture: Date;
          idclient: number;
          modepayment: string;
          total: number;
          montantpaye: number;
          montantretourne: number;
          HorsTax: number;
          TVA1: number;
          TVA2: number;
          factureligneProduits: FactureligneproduitModule[];

 }
