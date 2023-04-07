import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FactureligneproduitModule } from 'app/module/factureligneproduit.module';

@Injectable({
  providedIn: 'root'
})
export class FactureligneproduitService {
  private factureligneproduitsUrl = 'https://localhost:7185/api/Factureligneproduits';






  constructor(private http: HttpClient) { }
  getFactureligneproduits(): Observable<FactureligneproduitModule[]> {
    return this.http.get<FactureligneproduitModule[]>(this.factureligneproduitsUrl);
  }

  getFactureligneproduit(factureclientId: number, produitId: number): Observable<FactureligneproduitModule> {
    const url = `${this.factureligneproduitsUrl}/${factureclientId}/${produitId}`;
    return this.http.get<FactureligneproduitModule>(url);

  }

  addFactureligneproduit(factureLigneProduit: FactureligneproduitModule): Observable<FactureligneproduitModule> {
    return this.http.post<FactureligneproduitModule>(this.factureligneproduitsUrl, factureLigneProduit);
  }

  updateFactureligneproduit(factureclientId: number, produitId: number,factureLigneProduit: FactureligneproduitModule): Observable<FactureligneproduitModule> {
    const url = `${this.factureligneproduitsUrl}/${factureclientId}/${produitId}`; 
    return this.http.put<FactureligneproduitModule>(url, factureLigneProduit);
  }

  deleteFactureligneproduit(factureclientId: number, produitId: number): Observable<FactureligneproduitModule> {
    const url = `${this.factureligneproduitsUrl}/${factureclientId}/${produitId}`;
    return this.http.delete<FactureligneproduitModule>(url);
  }

}


