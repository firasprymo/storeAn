import { Component, OnInit } from '@angular/core';
import { ProduitModule } from 'app/module/produit.module';
import { ProduitService } from 'app/service/produit/produit.service';
import { CategorieModule } from 'app/module/categorie.module';
import { CategorieService } from 'app/service/categorie/categorie.service';

@Component({
  selector: 'app-listerproduit',
  templateUrl: './listerproduit.component.html',
  styleUrls: ['./listerproduit.component.scss']
})
export class ListerproduitComponent implements OnInit {
  produits: ProduitModule[];
  categories: CategorieModule[];
  pageSize = 5;
  currentPage = 1;

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.getProduits();
    this.getCategories();
  }

  getProduits(): void {
    this.produitService.getProduits().subscribe(produits => {
      this.produits = produits;
    });
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategorie(id: number): CategorieModule {
    return this.categories.find(categorie => categorie.id == id);
  }

  paginate(event) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
  }

  pageChanged(event) {
    this.currentPage = event;
  }
}

    

  
    
  

