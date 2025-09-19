import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma : PrismaService){}

  create(data : {ds_product_name : string , ds_quantity : number}) : Promise<Order>{
      return this.prisma.order.create({data})
  }

  getAll(){
    return this.prisma.order.findMany()
  }

async getOrderById(id_order: string) {
    const order = await this.prisma.order.findUnique({
      where: { id_order },
    });

    if (!order) throw new NotFoundException(`Order with ID ${id_order} not found`);
    return order;
  }

deletebyId(id_order : string) {
  const order = this.prisma.order.delete({
      where: { id_order },
    })

   if (!order) throw new NotFoundException(`Order with ID ${id_order} not found`);
    return {
      'message' : `${id_order} delete with sucess!`
    }
}  
}