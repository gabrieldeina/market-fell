import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}

  async index(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create(createProduct: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(createProduct);
  }

  async update(id: number, createProduct: CreateProductDto): Promise<Product> {
    await this.productRepository.update(id, createProduct);
    return await this.productRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.softDelete(id);
  }
}
