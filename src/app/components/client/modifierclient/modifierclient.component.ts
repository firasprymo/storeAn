import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientModule } from 'app/module/client.module';
import { ClientService } from 'app/service/client/client.service';

@Component({
  selector: 'app-modifierclient',
  templateUrl: './modifierclient.component.html',
  styleUrls: ['./modifierclient.component.scss']
})
export class ModifierclientComponent implements OnInit {
  clientId: number;
  client: ClientModule;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientId = +params.get('id');
      this.clientService.getClient(this.clientId).subscribe(client => {
        this.client = client;
      });
    });
  }

  onSubmit() {
    this.clientService.updateClient(this.client).subscribe(
      (response) => {
        console.log(response);
        // show a success message
        alert('Client updated successfully!');
        this.router.navigate(['/client/lister']);
      },
      (error) => {
        console.log(error);
        // show an error message
        alert('Error updating client!');
      }
    );
  }

} 
