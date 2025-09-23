import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaService } from 'src/prisma.service';
import { ConsumerController } from './consumer/consumer.controller';

@Module({
  controllers: [OrdersController, ConsumerController],
  providers: [OrdersService, PrismaService]
})
export class OrdersModule {}
