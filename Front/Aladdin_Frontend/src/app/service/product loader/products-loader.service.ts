import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsLoaderService {

  private apiURL = 'http://localhost:8080/products';

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  } 


  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
  

  constructor(private http: HttpClient) { }
}
