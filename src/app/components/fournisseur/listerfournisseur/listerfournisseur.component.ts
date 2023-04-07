import { Component, OnInit } from '@angular/core';
import { FournisseurModule } from 'app/module/fournisseur.module';
import { FournisseurService } from 'app/service/fournisseur/fournisseur.service';


@Component({
  selector: 'app-listerfournisseur',
  templateUrl: './listerfournisseur.component.html',
  styleUrls: ['./listerfournisseur.component.scss']
})
export class ListerfournisseurComponent implements OnInit {
    fournisseurs: FournisseurModule[] ;
    totalfournisseurs: number;
    pageSize = 5;
    currentPage = 1;
  
    constructor(private fournisseurService: FournisseurService) { }
  
    ngOnInit(): void {
      this.getfournisseurs();
    }
  
    getfournisseurs(): void {
      this.fournisseurService.getFournisseurs()
        .subscribe(fournisseurs => {
          this.fournisseurs = fournisseurs;
          this.totalfournisseurs = fournisseurs.length;

        });
    }
  

    

  
    paginate(event) {
      this.pageSize = event.target.value;
      this.currentPage = 1;
    }
    pageChanged(event) {
      this.currentPage = event;
    }
  }

