import {
  Controller,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Param,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  async index(): Promise<Product[]> {
    return this.productsService.index();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createProduct: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProduct);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProduct: CreateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, createProduct);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.delete(id);
  }
}
