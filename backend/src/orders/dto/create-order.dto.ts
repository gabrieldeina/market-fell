import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Preço deve ser preenchido.',
  })
  total: number;

  @IsNotEmpty({
    message: 'Categoria deve ser preenchida.',
  })
  category: string;
}
