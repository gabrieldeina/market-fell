import { Product } from "./Product";

export class Order {
  id?: number;
  total!: number;
  products!: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}
