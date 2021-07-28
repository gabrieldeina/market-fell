import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/product.entity';

export class CreateOrderDto {
  @IsNotEmpty({
    message: 'Total deve ser calculado para finalizar compra.',
  })
  total: number;

  @IsNotEmpty({
    message: 'Lista de produtos deve ser preenchida para finalizar compra.',
  })
  products: Product[];
}
