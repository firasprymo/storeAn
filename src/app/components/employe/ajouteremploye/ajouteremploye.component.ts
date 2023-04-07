import { Component, OnInit } from '@angular/core';
import { EmployeModule } from 'app/module/employe.module';
import { EmployeService } from 'app/service/employe/employe.service';


@Component({
  selector: 'app-ajouteremploye',
  templateUrl: './ajouteremploye.component.html',
  styleUrls: ['./ajouteremploye.component.scss']
})

export class AjouteremployeComponent implements OnInit {
  
  
  newEmploye: EmployeModule = {
    id: null,
  firstname: '',
  lastname: '',
  birthDate : null ,
  gender: '',
  cin : 0 ,
  typecontrat: '',
  phone: null,
  email: '',
  adresse: '',
  photo: '',
  salaire : null ,
  salairebrut : null ,

  };

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
   
    const newEmploye = new EmployeModule();
    newEmploye.firstname = this.newEmploye.firstname;
    newEmploye.lastname = this.newEmploye.lastname;
    newEmploye.cin = this.newEmploye.cin ;
    newEmploye.typecontrat = this.newEmploye.typecontrat ;
    newEmploye.gender = this.newEmploye.gender;
    newEmploye.phone = this.newEmploye.phone;
    newEmploye.email = this.newEmploye.email;
    newEmploye.adresse = this.newEmploye.adresse;
    newEmploye.photo = this.newEmploye.photo;
    newEmploye.salaire = this.newEmploye.salaire;
    newEmploye.salairebrut = this.newEmploye.salairebrut ;
    newEmploye.birthDate = this.newEmploye.birthDate;
  
    this.employeService.addEmploye(newEmploye).subscribe(
      (response) => {
        console.log(response);
        // clear the form and show a success message
        this.newEmploye = {
          id: 0,
          firstname: '',
          lastname: '',
          cin : 0 ,
          typecontrat: '',
          gender: '',
          phone: 0 ,
          email: '',
          adresse: '',
          photo: '',
          salaire: 0 ,
          salairebrut : 0 ,
          birthDate : null ,
        };
        alert('New employe added successfully!');
      },
      (error) => {
        console.log(error);
        // show an error message
        alert('Error adding new employe!');
      }
    );  }

}
