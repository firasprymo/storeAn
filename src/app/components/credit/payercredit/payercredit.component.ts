import { Component, OnInit } from '@angular/core';
import { ClientModule } from 'app/module/client.module';
import { ClientService } from 'app/service/client/client.service';
@Component({
  selector: 'app-payercredit',
  templateUrl: './payercredit.component.html',
  styleUrls: ['./payercredit.component.scss']
})
export class PayercreditComponent implements OnInit {
  clients: ClientModule[];
  selectedClient: number;
  clientCredit: number;
  creditPayment: number;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);

  }
  getClientCredit() {
    this.clientService.getClient(this.selectedClient).subscribe(client => {
      this.clientCredit = client.credit;
    });
  }
  saveCreditPayment(): void {
    this.clientService.updateCredit(this.selectedClient, -this.creditPayment)
      .subscribe(() => {
        // reset creditPayment value after successful update
        this.creditPayment = 0;
      });
  }


}
