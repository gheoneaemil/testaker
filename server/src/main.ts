import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ extended: true, limit: '100mb', parameterLimit: 1_000_000 }));
  app.enableCors({
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE']
  });
  await app.listen(3001);
}
bootstrap();
