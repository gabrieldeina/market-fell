import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Nome deve ser preenchido.',
  })
  name: string;

  @IsNotEmpty({
    message: 'Preço deve ser preenchido.',
  })
  price: number;

  @IsNotEmpty({
    message: 'Categoria deve ser preenchida.',
  })
  category: string;
}
