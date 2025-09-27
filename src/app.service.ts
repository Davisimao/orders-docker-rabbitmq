import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ORDERS_SERVICE') private readonly client: ClientProxy) {}

  async createOrder(order: any) {
    // envia evento "order_created" para a fila
    this.client.emit('order_created', order);
    return { message: 'Order enviado para a fila', order };
  }
}
