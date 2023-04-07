import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { EmployeModule } from '../../module/employe.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private employesUrl = 'https://localhost:7185/api/Employes';

  constructor(private http: HttpClient) { }

  getEmployes(): Observable<EmployeModule[]> {
    return this.http.get<EmployeModule[]>(this.employesUrl);
  }

  getEmploye(id: number): Observable<EmployeModule> {
    const url = `${this.employesUrl}/${id}`;
    return this.http.get<EmployeModule>(url);
  }

  addEmploye (employe: EmployeModule): Observable<EmployeModule> {
    return this.http.post<EmployeModule>(this.employesUrl, employe);
  }

  
  updateEmploye(employe: EmployeModule): Observable<EmployeModule> {
    const url = `${this.employesUrl}/${employe.id}`; 
    return this.http.put<EmployeModule>(url, employe);
  }

  deleteEmploye(id: number): Observable<EmployeModule> {
    const url = `${this.employesUrl}/${id}`;
    return this.http.delete<EmployeModule>(url);
  }
}
