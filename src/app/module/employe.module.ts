import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeModule { 
  id: number;
  firstname: string;
  lastname: string;
  cin : number ;
  typecontrat : string ;
  gender: string;
  birthDate: Date ;
  phone: number;
  email: string;
  adresse: string;
  photo: string;
  salaire: number;
  salairebrut : number;

  
}
