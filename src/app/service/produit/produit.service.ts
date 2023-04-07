import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProduitModule } from 'app/module/produit.module';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitsUrl = 'https://localhost:7185/api/Produits';

  constructor(private http: HttpClient) { }
  getProduits(): Observable<ProduitModule[]> {
    return this.http.get<ProduitModule[]>(this.produitsUrl);
  }

  getProduit(id: number): Observable<ProduitModule> {
    const url = `${this.produitsUrl}/${id}`;
    return this.http.get<ProduitModule>(url);
  }

  addProduit(produit: ProduitModule): Observable<ProduitModule> {
    return this.http.post<ProduitModule>(this.produitsUrl, produit);
  }

  updateProduit(produit: ProduitModule): Observable<ProduitModule> {
    const url = `${this.produitsUrl}/${produit.id}`; 
    return this.http.put<ProduitModule>(url, produit);
  }

  deleteProduit(id: number): Observable<ProduitModule> {
    const url = `${this.produitsUrl}/${id}`;
    return this.http.delete<ProduitModule>(url);
  }

  getProductByBarcode(barcode: string): Observable<ProduitModule> {
    const url = `${this.produitsUrl}/barcode/${barcode}`;
    return this.http.get<ProduitModule>(url);
  }
}


