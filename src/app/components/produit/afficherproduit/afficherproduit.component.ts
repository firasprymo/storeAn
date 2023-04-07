import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitModule } from 'app/module/produit.module';
import { ProduitService } from 'app/service/produit/produit.service';

@Component({
  selector: 'app-afficherproduit',
  templateUrl: './afficherproduit.component.html',
  styleUrls: ['./afficherproduit.component.scss']
})
export class AfficherproduitComponent implements OnInit {
produit: ProduitModule;
  constructor(private produitService: ProduitService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produitService.getProduit(id)
      .subscribe(produit => this.produit = produit);
  }

  onModify(): void {
    this.router.navigate(['/modifierproduit', this.produit.id]);
  }

  onDelete(): void {
    this.produitService.deleteProduit(this.produit.id)
    
      .subscribe(() => {
        alert(' produit deleted!');
        this.router.navigate(['/produit/lister']);
      });
  }

}



  




