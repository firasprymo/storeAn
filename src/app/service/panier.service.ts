import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PanierModule } from '../module/panier.module';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private paniersUrl = 'https://localhost:7185/api/Paniers';

  constructor(private http: HttpClient) { }

  getPaniers(): Observable<PanierModule[]> {
    return this.http.get<PanierModule[]>(this.paniersUrl);
  }

  getPanier(id: number): Observable<PanierModule> {
    const url = `${this.paniersUrl}/${id}`;
    return this.http.get<PanierModule>(url);
  }


  addPanier(panier: PanierModule): Observable<PanierModule> {
    return this.http.post<PanierModule>(this.paniersUrl, panier);
  }


}
