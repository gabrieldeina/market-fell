import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Nome do produto deve ser preenchido.',
  })
  name: string;

  @IsNotEmpty({
    message: 'Preço do produto deve ser preenchido.',
  })
  price: number;

  @IsNotEmpty({
    message: 'Categoria do produto deve ser preenchida.',
  })
  category: string;
}
