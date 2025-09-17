import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma : PrismaService){}

  create(data : {ds_product_name : string , ds_quantity : number}) : Promise<Order>{
   
      return this.prisma.order.create({data})
  }
}