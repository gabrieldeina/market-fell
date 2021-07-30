import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-create",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private service: ProductService) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.product).subscribe((product) => {
      console.log(product);
    });
  }
}
