import { Component, OnInit } from '@angular/core';
import {CategorieModule} from '../../module/categorie.module';
import {PanierModule} from '../../module/panier.module';
import {PanierService} from '../../service/panier.service';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  paniers: PanierModule[];
  pageSize = 5;
  currentPage = 1;

  constructor(
      private pannierService: PanierService,
  ) {}

  ngOnInit(): void {
    this.getPaniers();
  }

  getPaniers(): void {
    this.pannierService.getPaniers().subscribe(paniers => {
      this.paniers = paniers;
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





