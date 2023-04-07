import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurModule } from 'app/module/fournisseur.module';
import { FournisseurService } from 'app/service/fournisseur/fournisseur.service';

@Component({
  selector: 'app-afficherfournisseur',
  templateUrl: './afficherfournisseur.component.html',
  styleUrls: ['./afficherfournisseur.component.scss']
})
export class AfficherfournisseurComponent implements OnInit {
  fournisseur: FournisseurModule;

  constructor(private fournisseurService: FournisseurService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fournisseurService.getFournisseur(id)
      .subscribe(fournisseur => this.fournisseur = fournisseur);
  }
  onModify(): void {
    this.router.navigate(['/modifierfournisseur', this.fournisseur.id]);
  }

  onDelete(): void {
    this.fournisseurService.deleteFournisseur(this.fournisseur.id)
    
      .subscribe(() => {
        alert(' fournisseur deleted!');
        this.router.navigate(['/fournisseur/lister']);
      });
  }

}
