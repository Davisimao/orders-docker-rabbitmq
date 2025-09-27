import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades extras
      forbidNonWhitelisted: true, // retorna erro se tiver campo extra
      transform: true, // transforma JSON em instâncias de classes
    }),
  );

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
