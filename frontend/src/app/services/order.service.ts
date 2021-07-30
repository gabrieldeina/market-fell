import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../models/Order";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  list(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orders`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}orders`, order);
  }
}
