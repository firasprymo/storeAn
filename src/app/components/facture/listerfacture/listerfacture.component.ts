import { Component, OnInit } from '@angular/core';
import { FactureclientModule } from 'app/module/factureclient.module';
import { FactureclientService } from 'app/service/factureclient/factureclient.service';
import { ClientService } from 'app/service/client/client.service';
import { ClientModule } from 'app/module/client.module';

@Component({
  selector: 'app-listerfacture',
  templateUrl: './listerfacture.component.html',
  styleUrls: ['./listerfacture.component.scss']
})
export class ListerfactureComponent implements OnInit {
  factureclients: FactureclientModule[] ;
  totalFactureclients: number;
  pageSize = 5;
  currentPage = 1;
  clients: ClientModule[];
  constructor(private factureclientService:FactureclientService, private clientService:ClientService ) { }

  ngOnInit(): void {
    this.getFactureclients();
    this.getClients();

  }
  getFactureclients(): void {
    this.factureclientService.getFactureclients()
      .subscribe(factureclients => {
        this.factureclients = factureclients;
        this.totalFactureclients = factureclients.length;


      });
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  getClientName(id: number): string {
    const client = this.clients.find(c => c.id === id);
    return client ? client.name : '';
  }

  paginate(event) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
  }
  pageChanged(event) {
    this.currentPage = event;
  }
}
