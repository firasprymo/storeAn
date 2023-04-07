import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModule } from 'app/module/client.module';
import { ClientService } from 'app/service/client/client.service';

@Component({
  selector: 'app-afficherclient',
  templateUrl: './afficherclient.component.html',
  styleUrls: ['./afficherclient.component.scss']
})
export class AfficherclientComponent implements OnInit {
  client: ClientModule;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }
  onModify(): void {
    this.router.navigate(['/modifierclient', this.client.id]);
  }

  onDelete(): void {
    this.clientService.deleteClient(this.client.id)
    
      .subscribe(() => {
        alert(' client deleted!');
        this.router.navigate(['/client/lister']);
      });
  }

}
