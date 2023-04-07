import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieModule } from 'app/module/categorie.module';
import { CategorieService } from 'app/service/categorie/categorie.service';

@Component({
  selector: 'app-affichercategorie',
  templateUrl: './affichercategorie.component.html',
  styleUrls: ['./affichercategorie.component.scss']
})
export class AffichercategorieComponent implements OnInit {
  categorie: CategorieModule;
  parentcategorie: CategorieModule;
  constructor(private categorieService: CategorieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categorieService.getCategorie(id)
      .subscribe(categorie => this.categorie = categorie);
    //  if (this.categorie.parentid !== 0) {
      this.categorieService.getParentCategorie(id)
      .subscribe(parentcategorie => this.parentcategorie = parentcategorie);
    //}
  }


  onModify(): void {
    this.router.navigate(['/modifiercategorie', this.categorie.id]);
  }

  onDelete(): void {
    this.categorieService.deleteCategorie(this.categorie.id)
    
      .subscribe(() => {
        alert('Category deleted!');
        this.router.navigate(['/categorie/lister']);
      });
  }

}
