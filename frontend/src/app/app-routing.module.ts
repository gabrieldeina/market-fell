import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateOrderComponent } from "./components/views/orders/create/create-order.component";
import { ListOrderComponent } from "./components/views/orders/list/list-order.component";
import { CreateProductComponent } from "./components/views/products/create/create-product.component";
import { ListProductComponent } from "./components/views/products/list/list-product.component";

const routes: Routes = [
  {
    path: "orders",
    component: ListOrderComponent,
  },
  {
    path: 'order/create',
    component: CreateOrderComponent
  },
  {
    path: "products",
    component: ListProductComponent,
  },
  {
    path: "product/create",
    component: CreateProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
