import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [OrdersModule, ClientsModule.register([
    {
      name: 'ORDERS_SERVICE', // identificador do client
      transport: Transport.RMQ,
       options: {
          urls: ['amqp://admin:admin@localhost:5672'], // URL do RabbitMQ
          queue: 'orders_queue', // nome da fila
          queueOptions: {
            durable: true, // fila persistente
          },
        },
    }
  ])],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
