import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  @EventPattern('order_created') // escuta mensagens com esse padrão
  async handleOrderCreated(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    console.log('📩 Mensagem recebida:', data);

    // garante que a mensagem não fica presa na fila
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
}
