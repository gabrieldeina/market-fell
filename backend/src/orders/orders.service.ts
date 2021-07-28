import { Injectable } from '@nestjs/common';
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
    return await this.orderRepository.find();
  }

  async create(createOrder: CreateOrderDto): Promise<Order> {
    return await this.orderRepository.save(createOrder);
  }

  async update(id: number, createOrder: CreateOrderDto): Promise<Order> {
    await this.orderRepository.update(id, createOrder);
    return await this.orderRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.orderRepository.softDelete(id);
  }
}
