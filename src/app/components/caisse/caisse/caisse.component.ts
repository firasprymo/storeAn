import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClientService} from 'app/service/client/client.service';
import {ClientModule} from 'app/module/client.module';
import {ProduitService} from 'app/service/produit/produit.service';
import {FactureclientModule} from 'app/module/factureclient.module';
import {FactureclientService} from 'app/service/factureclient/factureclient.service';
import {FactureligneproduitModule} from 'app/module/factureligneproduit.module';
import {ProduitModule} from '../../../module/produit.module';
import {FormBuilder, FormGroup} from '@angular/forms';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
    selector: 'app-caisse',
    templateUrl: './caisse.component.html',
    styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent implements OnInit {
    clients: ClientModule[];
    produits: ProduitModule[] = [];
    formCaisse: FormGroup;
    time: Date;
    selectedClient: ClientModule | undefined;
    paymentMethod: string = 'cash';
    amountPaid = 0;
    tableData: ProduitModule[] = [];
    factureNumber: number;
    @ViewChild('pdfTable') pdfTable: ElementRef;

    constructor(private factureclientService: FactureclientService,
                private fb: FormBuilder,
                private clientService: ClientService, private produitService: ProduitService) {
    }

    ngOnInit(): void {
        this.formCaisse = this.fb.group({
            barCode: [],
            quantity: [],
        });
        for (let i = 1; i < 50; i++) {

            this.produits.push({
                id: i,
                codebar: i + 515,
                nom: 'Iphone ' + i,
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            });
        }

        this.setCurrentTime();
        this.getClients();
        this.factureclientService.getFactureclients().subscribe(factures => {
            const factureNumber = factures.reduce((max, facture) => facture.id > max ? facture.id : max, 0) + 1;
            this.factureNumber = factureNumber;
        });

    }

    setCurrentTime() {
        this.time = new Date();
    }

    getClients(): void {
        this.clientService.getClients()
            .subscribe(clients => this.clients = clients);
    }


    onClientSelect(client: ClientModule): void {
        this.selectedClient = client;
        console.log('Selected client:', this.selectedClient);
    }

    onPaymentMethodChange(value: string) {
        this.paymentMethod = value;
    }

    onAddClick() {
        console.log(this.formCaisse.value.quantity);

        // Retrieve product information using barcode
        const index = this.produits.findIndex(produit =>
            produit.codebar === this.formCaisse.value.barCode
        );
        this.produits[index].qteInPacket = this.formCaisse.value.quantity;
        console.log(this.produits);
        const item: ProduitModule = this.produits.find(produit =>
            produit.codebar === this.formCaisse.value.barCode
        );
        this.tableData.push(item);
        console.log(this.tableData);
    }

    removeItem(item: any) {
        const index = this.tableData.indexOf(item);
        if (index > -1) {
            this.tableData.splice(index, 1);
        }
    }

    get totalPurchase(): number {
        return this.tableData.reduce((total, row) =>
                total + (row.qteInPacket * row.prixvente),
            0);

    }


    onSave() {
        //     // Add Total Purchase to client.credit
        //     if (this.selectedClient && this.paymentMethod == 'credit') {
        //         console.log('Selected client:', this.selectedClient);
        //         console.log('Total Purchase:', this.totalPurchase);
        //
        //         this.clientService.updateCredit(this.selectedClient.id, this.totalPurchase)
        //             .subscribe(() => {
        //                 console.log('Credit updated successfully.');
        //             }, (error) => {
        //                 console.error('Error updating credit:', error);
        //             });
        //     }
        //
        //     // Set the amount paid based on the payment method
        //     let amountPaid = 0;
        //     if (this.paymentMethod === 'cash') {
        //         amountPaid = this.amountPaid;
        //     }
        //
        //     // Save the invoice and reset the tableData array
        //     // Create a new instance of FactureclientModule
        //     const factureclient = new FactureclientModule();
        //     factureclient.datefacture = new Date(); // Set the date
        //     factureclient.montantpaye = amountPaid;
        //     factureclient.montantretourne = amountPaid - this.totalPurchase;
        //     factureclient.modepayment = this.paymentMethod;
        //     if (this.selectedClient) {
        //         factureclient.idclient = this.selectedClient.id;
        //     }
        //     factureclient.factureligneProduits = this.tableData.map(row => { // Set the lignes
        //         const ligne = new FactureligneproduitModule();
        //         ligne.produitId = row.produitid;
        //         ligne.produit = row.name;
        //         ligne.quantite = row.quantity;
        //
        //         return ligne;
        //     });
        //     factureclient.total = this.totalPurchase; // Set the total
        //
        //     // Call FactureclientService to save the invoice
        //     this.factureclientService.addFactureclient(factureclient)
        //         .subscribe(() => {
        //             console.log('Invoice saved successfully.');
        //
        //             // Reset the tableData array and other variables
        //             this.tableData = [];
        //             this.selectedClient = undefined;
        //             this.paymentMethod = 'cash';
        //             this.amountPaid = 0;
        //         }, (error) => {
        //             console.error('Error saving invoice:', error);
        //         });
    }

    public downloadAsPDF() {
        const doc = new jsPDF();
        //get table html
        const pdfTable = this.pdfTable.nativeElement;
        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);

        const documentDefinition = { content: html };
        pdfMake.createPdf(documentDefinition).open();


    }
}

