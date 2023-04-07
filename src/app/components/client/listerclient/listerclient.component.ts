import { Component, OnInit } from '@angular/core';
import { ClientModule } from 'app/module/client.module';
import { ClientService } from 'app/service/client/client.service';


@Component({
  selector: 'app-listerclient',
  templateUrl: './listerclient.component.html',
  styleUrls: ['./listerclient.component.scss']
})
export class ListerclientComponent implements OnInit {
    clients: ClientModule[] ;
    totalClients: number;
    pageSize = 5;
    currentPage = 1;
  
    constructor(private clientService: ClientService) { }
  
    ngOnInit(): void {
      this.getClients();
    }
  
    getClients(): void {
      this.clientService.getClients()
        .subscribe(clients => {
          this.clients = clients;
          this.totalClients = clients.length;

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

