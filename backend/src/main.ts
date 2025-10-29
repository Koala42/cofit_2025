import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* THIS FILE IS NOT PART OF THE CHALLENGE */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
