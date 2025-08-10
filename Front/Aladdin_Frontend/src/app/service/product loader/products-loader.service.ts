import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsLoaderService {
 

  private apiUrl = 'http://localhost:8080/products';

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  } 


  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  deleteProductById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  

    
  addProduct(product: Product, file: File | null): Observable<Product> {
    const formData: FormData = new FormData();
    

    formData.append('product', JSON.stringify(product));
    
    if (file) {
      formData.append('file', file);
    }
  
    return this.http.post<Product>(this.apiUrl, formData);
  }
  
  
    updateProduct(id: number, product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
    }
  

  constructor(private http: HttpClient) { }
}
