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
import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  async index(): Promise<Order[]> {
    return this.ordersService.index();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createOrder: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrder);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createOrder: CreateOrderDto,
  ): Promise<Order> {
    return this.ordersService.update(id, createOrder);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.ordersService.delete(id);
  }
}
