import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { FournisseurModule } from '../../module/fournisseur.module';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private fournisseursUrl = 'https://localhost:7185/api/Fournisseurs';

  constructor(private http: HttpClient) { }

  getFournisseurs(): Observable<FournisseurModule[]> {
    return this.http.get<FournisseurModule[]>(this.fournisseursUrl);
  }

  getFournisseur(id: number): Observable<FournisseurModule> {
    const url = `${this.fournisseursUrl}/${id}`;
    return this.http.get<FournisseurModule>(url);
  }

  addFournisseur(fournisseur: FournisseurModule): Observable<FournisseurModule> {
    return this.http.post<FournisseurModule>(this.fournisseursUrl, fournisseur);
  }

  
  updateFournisseur(fournisseur: FournisseurModule): Observable<FournisseurModule> {
    const url = `${this.fournisseursUrl}/${fournisseur.id}`; 
    return this.http.put<FournisseurModule>(url, fournisseur);
  }

  deleteFournisseur(id: number): Observable<FournisseurModule> {
    const url = `${this.fournisseursUrl}/${id}`;
    return this.http.delete<FournisseurModule>(url);
  }
}
