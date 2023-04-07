import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModule } from 'app/module/client.module';
import { ClientService } from 'app/service/client/client.service';
import { FactureclientModule } from 'app/module/factureclient.module';
import { FactureclientService } from 'app/service/factureclient/factureclient.service';
import { ProduitModule } from 'app/module/produit.module';
import { ProduitService } from 'app/service/produit/produit.service';

@Component({
  selector: 'app-afficherfacture',
  templateUrl: './afficherfacture.component.html',
  styleUrls: ['./afficherfacture.component.scss']
})
export class AfficherfactureComponent implements OnInit {
factureclient:FactureclientModule;
produit:ProduitModule;
  constructor(private produitService:ProduitService,private factureclientService:FactureclientService,private route: ActivatedRoute, private router: Router) { }

 /* ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.factureclientService.getFactureclient(id)
      .subscribe(factureclient => this.factureclient = factureclient);
  }
*/
ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.factureclientService.getFactureclient(id).subscribe((data: FactureclientModule) => {
    this.factureclient = data;
    
    // fetch the corresponding produit for each factureligneProduit
    this.factureclient.factureligneProduits.forEach(ligne => {
      this.produitService.getProduit(ligne.produitId).subscribe((produit: ProduitModule) => {
        ligne.produit = produit;
      });
    });
  });
}
/*  onDelete(): void {
    this.factureclientService.deleteFactureclient(this.factureclient.id)
    
      .subscribe(() => {
        alert(' factureclient deleted!');
        this.router.navigate(['/factureclient/lister']);
      });
  }*/
}
