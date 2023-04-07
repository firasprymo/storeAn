import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FactureclientModule } from 'app/module/factureclient.module';
import { ProduitService } from '../produit/produit.service';
@Injectable({
  providedIn: 'root'
})
export class FactureclientService {
  private factureclientUrl = 'https://localhost:7185/api/Factureclients';

  constructor(private http: HttpClient,private produitService: ProduitService) { }
  getFactureclients(): Observable<FactureclientModule[]> {
    return this.http.get<FactureclientModule[]>(this.factureclientUrl);
  }

  getFactureclient(id: number): Observable<FactureclientModule> {
    const url = `${this.factureclientUrl}/${id}`;
    return this.http.get<FactureclientModule>(url);
  }



  addFactureclient(factureclient: FactureclientModule): Observable<FactureclientModule> {
    return this.http.post<FactureclientModule>(this.factureclientUrl, factureclient);
  }

  updateFactureclient(factureclient: FactureclientModule): Observable<FactureclientModule> {
    const url = `${this.factureclientUrl}/${factureclient.id}`;
    return this.http.put<FactureclientModule>(url, factureclient);
  }

  deleteFactureclient(id: number): Observable<any> {
    const url = `${this.factureclientUrl}/${id}`;
    return this.http.delete(url);
  }
}
