import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FournisseurModule { 
  id: number;
  name: string;
  lastname: string;
  gender: string;
  phone: number;
  email: string;
  adresse: string;
  photo: string;

}
