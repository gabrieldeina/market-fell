import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-list",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.list().subscribe((products) => {
      this.products = products;
    });
  }
}
