import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'app/service/produit/produit.service';
import { ProduitModule } from 'app/module/produit.module';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.scss']
})
export class PannierComponent implements OnInit {
  Produits : ProduitModule[] ;
  time: Date;
  constructor() { }

  
  ngOnInit(): void {
  
    this.getProduits();
  }
  getProduits() {
    throw new Error('Method not implemented.');
  }
  onSave() {

       
  }

}
