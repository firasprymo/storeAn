import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/service/client/client.service'; 
import { ClientModule } from 'app/module/client.module';
import { ProduitService } from 'app/service/produit/produit.service';
import { FactureclientModule } from 'app/module/factureclient.module';
import { FactureclientService } from 'app/service/factureclient/factureclient.service';
import { FactureligneproduitModule } from 'app/module/factureligneproduit.module';
@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent implements OnInit {
  clients: ClientModule[];
  time: Date;
  selectedClient: ClientModule | undefined;
  paymentMethod: string="cash";
  amountPaid= 0;
  tableData: any[] = [];
  barcodeInput: HTMLInputElement;
quantityInput: HTMLInputElement;
  selectedInput: HTMLInputElement;
  factureNumber: number;
popupVisible: boolean = false;

  constructor(private factureclientService:FactureclientService,private clientService: ClientService, private produitService: ProduitService) { }

  ngOnInit(): void {
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
  
  onAddClick(barcodeInput: HTMLInputElement, quantityInput: HTMLInputElement) {
    const barcode = barcodeInput.value;
    const quantity = parseInt(quantityInput.value, 10); 

    // Retrieve product information using barcode
    this.produitService.getProductByBarcode(barcode).subscribe(produit => {
      const newRow = {
        barcode: produit.codebar,
        quantity: quantity,
        name: produit.nom,
        produitid: produit.id,
        unitPrice: produit.prixvente,
        reduction: produit.reductionprix,
        total: produit.prixvente * quantity,
      };
  
      // Add new row to the table
      this.tableData.push(newRow);
    });
  }

  removeItem(item: any) {
    const index = this.tableData.indexOf(item);
    if (index > -1) {
      this.tableData.splice(index, 1);
    }
  }
  get totalPurchase(): number {
    return this.tableData.reduce((acc, row) => acc + row.total, 0);
  }
  

  onSave() {
    // Add Total Purchase to client.credit
    if (this.selectedClient && this.paymentMethod=="credit") {
      console.log('Selected client:', this.selectedClient);
      console.log('Total Purchase:', this.totalPurchase);
  
      this.clientService.updateCredit(this.selectedClient.id, this.totalPurchase)
        .subscribe(() => {
          console.log('Credit updated successfully.');
        }, (error) => {
          console.error('Error updating credit:', error);
        });
    }
  
    // Set the amount paid based on the payment method
    let amountPaid = 0;
    if (this.paymentMethod === "cash") {
      amountPaid = this.amountPaid;
    } 
  
    // Save the invoice and reset the tableData array
    // Create a new instance of FactureclientModule
    const factureclient = new FactureclientModule();
    factureclient.datefacture = new Date(); // Set the date
    factureclient.montantpaye = amountPaid;
    factureclient.montantretourne = amountPaid - this.totalPurchase;
    factureclient.modepayment = this.paymentMethod;
    if (this.selectedClient) {
      factureclient.idclient = this.selectedClient.id;
    }
    factureclient.factureligneProduits = this.tableData.map(row => { // Set the lignes
      const ligne = new FactureligneproduitModule();
      ligne.produitId = row.produitid;
      ligne.produit = row.name;
      ligne.quantite = row.quantity;
  
      return ligne;
    });
    factureclient.total = this.totalPurchase; // Set the total
  
    // Call FactureclientService to save the invoice
    this.factureclientService.addFactureclient(factureclient)
      .subscribe(() => {
        console.log('Invoice saved successfully.');
  
        // Reset the tableData array and other variables
        this.tableData = [];
        this.selectedClient = undefined;
        this.paymentMethod = "cash";
        this.amountPaid = 0;
      }, (error) => {
        console.error('Error saving invoice:', error);
      });
  }
  

}

