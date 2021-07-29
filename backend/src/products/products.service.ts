import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    if ((await this.productRepository.find()).length === 0) {
      throw new NotFoundException('Não há nenhum produto cadastrado');
    }

    return await this.productRepository.find();
  }

  async create(createProduct: CreateProductDto): Promise<Product> {
    const product = await this.findByName(createProduct.name);
    if (product) {
      throw new ConflictException('Nome de produto já cadastrado.');
    }

    return await this.productRepository.save(createProduct);
  }

  async update(id: number, createProduct: CreateProductDto): Promise<Product> {
    const product = await this.findById(id);
    if (product) {
      await this.productRepository.update(id, createProduct);
      return await this.productRepository.findOne(id);
    }

    throw new NotFoundException('ID do produto não encontrado.');
  }

  async delete(id: number): Promise<Product> {
    const product = await this.findById(id);
    if (product) {
      await this.productRepository.softDelete(id);
      return product;
    }

    throw new NotFoundException('ID do produto não encontrado.');
  }

  async findByName(name: string): Promise<Product | null> {
    return this.productRepository.findOne({
      name: name,
    });
  }

  async findById(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      id: id,
    });
  }
}
