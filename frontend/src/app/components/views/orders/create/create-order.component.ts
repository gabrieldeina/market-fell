import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Order } from "src/app/models/Order";
import { Product } from "src/app/models/Product";
import { OrderService } from "src/app/services/order.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-create",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"],
})
export class CreateOrderComponent implements OnInit {
  total!: string;
  products: Product[] = [];
  productsAux!: Product[];
  idProduct!: string;

  constructor(
    private router: Router,
    private service: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.list().subscribe((products) => {
      this.productsAux = products;
    });
  }

  create(): void {
    let order = new Order();
    order.total = parseFloat(this.total);
    order.products = this.products;
    this.service.create(order).subscribe((order) => {
      console.log(order);
    });
    this.router.navigate(["/orders"]);
  }

  addProduct(): void {
    let product = this.productService.findById(+this.idProduct);
    console.log(product);
    //this.products.push(product);
  }
}
