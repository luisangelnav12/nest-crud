import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//PARA eliminar data basura que no esta en la clase dto
    forbidNonWhitelisted: true,//te indica que no se puede enviar data que no esta en la clase dto
  }))
  await app.listen(3000);

}
bootstrap();
