import { Component, OnInit } from '@angular/core';
import { EmployeModule } from 'app/module/employe.module';
import { EmployeService } from 'app/service/employe/employe.service';


@Component({
  selector: 'app-listeremploye',
  templateUrl: './listeremploye.component.html',
  styleUrls: ['./listeremploye.component.scss']
})
export class ListeremployeComponent implements OnInit {
    employes: EmployeModule[] ;
    totalemployes: number;
    pageSize = 5;
    currentPage = 1;
  
    constructor(private employeService: EmployeService) { }
  
    ngOnInit(): void {
      this.getEmployes();
    }
  
    getEmployes(): void {
      this.employeService.getEmployes()
        .subscribe(employes => {
          this.employes = employes;
          this.totalemployes = employes.length;

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

