import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/models/Order";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-create",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"],
})
export class CreateOrderComponent implements OnInit {
  order: Order = new Order();

  constructor(private service: OrderService) {}

  ngOnInit(): void {}

  create(): void {
    this.order.products = [
      { id: 1, name: "Arroz 2", price: 25, category: "Alimento" },
      { id: 1, name: "Arroz 2", price: 25, category: "Alimento" },
    ];
    this.service.create(this.order).subscribe((order) => {
      console.log(order);
    });
  }
}
