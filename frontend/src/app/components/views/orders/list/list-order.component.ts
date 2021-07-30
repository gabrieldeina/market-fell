import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/models/Order";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-list",
  templateUrl: "./list-order.component.html",
  styleUrls: ["./list-order.component.css"],
})
export class ListOrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.service.list().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
