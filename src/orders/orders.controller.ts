import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() body: { ds_product_name: string; ds_quantity: number }) {
    return this.ordersService.create(body);
  }

  @Get()
  getAll(){
    return this.ordersService.getAll()
  }
}
