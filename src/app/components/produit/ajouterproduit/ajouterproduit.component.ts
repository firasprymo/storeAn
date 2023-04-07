import {Component, OnInit} from '@angular/core';
import {ProduitModule} from 'app/module/produit.module';
import {ProduitService} from 'app/service/produit/produit.service';
import {CategorieModule} from 'app/module/categorie.module';
import {CategorieService} from 'app/service/categorie/categorie.service';

@Component({
    selector: 'app-ajouterproduit',
    templateUrl: './ajouterproduit.component.html',
    styleUrls: ['./ajouterproduit.component.scss']
})
export class AjouterproduitComponent implements OnInit {

    newProduit: ProduitModule = {

        id: 0,
        codebar: null,
        nom: '',
        qteInPacket: null,
        article: '',
        color: '',
        description: '',
        categorieid: null,
        quantiteStockMin: null,
        quantiteStockmax: null,
        prixFournisseur: null,
        prixventemin: null,
        prixvente: null,
        stock: null,
        reductionprix: null,
        dateexpiration: null,
        image: '',
    };
    categories: CategorieModule[];
    value = 'CODE128';
     barCode: boolean = false;

    constructor(private produitService: ProduitService, private categorieService: CategorieService) {
    }

    ngOnInit(): void {
        this.getCategories();
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
        this.barCode = false;
        const newProduit = new ProduitModule();
        newProduit.id = this.newProduit.id;
        newProduit.codebar = this.newProduit.codebar;
        newProduit.nom = this.newProduit.nom;
        newProduit.qteInPacket = this.newProduit.qteInPacket;
        newProduit.article = this.newProduit.article;
        newProduit.color = this.newProduit.color;
        newProduit.description = this.newProduit.description;
        newProduit.categorieid = this.newProduit.categorieid;
        newProduit.quantiteStockMin = this.newProduit.quantiteStockMin;
        newProduit.quantiteStockmax = this.newProduit.quantiteStockmax;
        newProduit.prixFournisseur = this.newProduit.prixFournisseur;
        newProduit.prixventemin = this.newProduit.prixventemin;
        newProduit.prixvente = this.newProduit.prixvente;
        newProduit.stock = this.newProduit.stock;
        newProduit.reductionprix = this.newProduit.reductionprix;
        newProduit.dateexpiration = this.newProduit.dateexpiration;
        newProduit.image = this.newProduit.image;
        console.log(newProduit); //  check the values of newProduit

        this.produitService.addProduit(newProduit).subscribe(
            (response) => {
                this.barCode = true;
                console.log(response);
                // clear the form and show a success message
                this.newProduit = {
                    id: 0,
                    codebar: null,
                    nom: '',
                    qteInPacket: null,
                    article: '',
                    color: '',
                    description: '',
                    categorieid: null,
                    quantiteStockMin: null,
                    quantiteStockmax: null,
                    prixFournisseur: null,
                    prixventemin: null,
                    prixvente: null,
                    stock: null,
                    reductionprix: null,
                    dateexpiration: null,
                    image: '',
                };
                alert('New produit added successfully!');
            },
            (error) => {
                console.log(error);
                // show an error message
                alert('Error adding new produit!');
            }
        );
    }
}
