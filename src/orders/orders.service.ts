import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

async deletebyId(id_order : string) {
  const order = await this.prisma.order.delete({
      where: { id_order },
    })

   if (!order) throw new NotFoundException(`Order with ID ${id_order} not found`);
    return {
      'message' : `${id_order} delete with sucess!`
    }
}  

async updatebyId(id_order: string, ds_product_name: string) {
  if (!ds_product_name) {
    throw new BadRequestException('ds_product_name is required');
  }

  try {
    const order = await this.prisma.order.update({
      where: { id_order },
      data: { ds_product_name },
    });
    return order;
  } catch (error) {
    if (error.code === 'P2025') { 
      throw new NotFoundException(`Order with ID ${id_order} not found`);
    }
    throw error;
  }
}
}