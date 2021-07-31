import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}products`, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}product/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}products/${id}`);
  }
}
