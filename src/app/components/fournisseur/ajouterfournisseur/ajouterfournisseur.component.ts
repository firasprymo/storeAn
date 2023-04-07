import { Component, OnInit } from '@angular/core';
import { FournisseurModule } from 'app/module/fournisseur.module';
import { FournisseurService } from 'app/service/fournisseur/fournisseur.service';

@Component({
  selector: 'app-ajouterfournisseur',
  templateUrl: './ajouterfournisseur.component.html',
  styleUrls: ['./ajouterfournisseur.component.scss']
})
export class AjouterfournisseurComponent implements OnInit {
  newFournisseur: FournisseurModule = {
    id: null,
  name: '',
  lastname: '',
  gender: '',
  phone: null,
  email: '',
  adresse: '',
  photo: '',
  };
  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const newFournisseur = new FournisseurModule();
    newFournisseur.name = this.newFournisseur.name;
    newFournisseur.lastname = this.newFournisseur.lastname;
    newFournisseur.gender = this.newFournisseur.gender;
    newFournisseur.phone = this.newFournisseur.phone;
    newFournisseur.email = this.newFournisseur.email;
    newFournisseur.adresse = this.newFournisseur.adresse;
    newFournisseur.photo = this.newFournisseur.photo;

  
    this.fournisseurService.addFournisseur(newFournisseur).subscribe(
      (response) => {
        console.log(response);
        // clear the form and show a success message
        this.newFournisseur = {
          id: 0,
          name: '',
          lastname: '',
          gender: '',
          phone: 0 ,
          email: '',
          adresse: '',
          photo: ''
        };
        alert('New fournisseur added successfully!');
      },
      (error) => {
        console.log(error);
        // show an error message
        alert('Error adding new fournisseur!');
      }
    );  }

}
