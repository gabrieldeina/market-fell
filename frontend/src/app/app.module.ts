import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { CreateOrderComponent } from "./components/views/orders/create/create-order.component";
import { ListOrderComponent } from "./components/views/orders/list/list-order.component";
import { CreateProductComponent } from "./components/views/products/create/create-product.component";
import { ListProductComponent } from "./components/views/products/list/list-product.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateOrderComponent,
    ListOrderComponent,
    CreateProductComponent,
    ListProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
