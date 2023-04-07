import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeModule } from 'app/module/employe.module';
import { EmployeService } from 'app/service/employe/employe.service';

@Component({
  selector: 'app-afficheremploye',
  templateUrl: './afficheremploye.component.html',
  styleUrls: ['./afficheremploye.component.scss']
})
export class AfficheremployeComponent implements OnInit {
  employe: EmployeModule;

  constructor(private employeService: EmployeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeService.getEmploye(id)
      .subscribe(employe => this.employe = employe);
  }
  onModify(): void {
    this.router.navigate(['/modifieremploye', this.employe.id]);
  }

  onDelete(): void {
    this.employeService.deleteEmploye(this.employe.id)
    
      .subscribe(() => {
        alert(' employe deleted!');
        this.router.navigate(['/employe/lister']);
      });
  }

}
