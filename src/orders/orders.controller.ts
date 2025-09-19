import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() body: { ds_product_name: string; ds_quantity: number }) {
    return this.ordersService.create(body);
  }

  @Get()
  getAll(){
    return this.ordersService.getAll()
  }

  @Get(':id')
  getbyId(@Param('id') id : string ){
    return this.ordersService.getOrderById(id)
  }

  @Delete(':id')
  deletebyId(@Param('id') id : string){
    return this.ordersService.deletebyId(id)
  }
}
