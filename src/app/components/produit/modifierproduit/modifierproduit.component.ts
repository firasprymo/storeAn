import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitModule } from 'app/module/produit.module';
import { ProduitService } from 'app/service/produit/produit.service';
import { CategorieModule } from 'app/module/categorie.module';
import { CategorieService } from 'app/service/categorie/categorie.service';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.scss']
})
export class ModifierproduitComponent implements OnInit {
  produitId: number;
  produit: ProduitModule;
  categories: CategorieModule[];

  constructor( private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
    private categorieService: CategorieService) { }

    ngOnInit(): void {
      this.getCategories();

      this.route.paramMap.subscribe(params => {
        this.produitId = +params.get('id');
        this.produitService.getProduit(this.produitId).subscribe(produit => {
          this.produit = produit;
        });
      });
    }




  
  getCategories(): void {
    this.categorieService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.log('Error retrieving categories', error);
      }
    );
  }
  
    onSubmit() {
      this.produitService.updateProduit(this.produit).subscribe(
        (response) => {
          console.log(response);
          // show a success message
          alert('Produit updated successfully!');
          this.router.navigate(['/produit/lister']);
        },
        (error) => {
          console.log(error);
          // show an error message
          alert('Error updating Produit!');
        }
      );
    }
  

}





  


  

