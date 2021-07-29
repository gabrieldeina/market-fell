import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository,
  ) {}

  async index(): Promise<Order[]> {
    if ((await this.orderRepository.find()).length === 0) {
      throw new NotFoundException('Não há nenhuma venda cadastrada.');
    }
    return await this.orderRepository.find();
  }

  async create(createOrder: CreateOrderDto): Promise<Order> {
    return await this.orderRepository.save(createOrder);
  }

  async update(id: number, createOrder: CreateOrderDto): Promise<Order> {
    if (this.findById(id)) {
      await this.orderRepository.update(id, createOrder);
      return await this.orderRepository.findOne(id);
    }
    throw new NotFoundException('ID da venda não encontrada.');
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.softDelete(id);
  }

  async findById(id: number): Promise<Order | null> {
    return this.orderRepository.findOne({
      id: id,
    });
  }
}
