import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config();

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);

}
bootstrap();
