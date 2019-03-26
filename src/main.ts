import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';
// import { ValidationPipe } from 'pipes/validation.pipe';

import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  // A public folder to serve static files
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  // set ejs as the view engine
  app.set('view engine', 'ejs');
  // ENV
  require('dotenv').config();

  // WE CAN USE PIPES GLOBALLY
  // app.useGlobalPipes(new ValidationPipe());
  // The useGlobalPipes() method doesn't set up pipes for gateways and micro services
  // (whereas hybrid app feature is being used).
  await app.listen(3000);
}
bootstrap();
