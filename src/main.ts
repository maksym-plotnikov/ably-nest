import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
// import express module
import * as express from 'express';
// path
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // A public folder to serve static files
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  // set ejs as the view engine
  app.set('view engine', 'ejs');
  // ENV
  require('dotenv').config();
  await app.listen(3000);
}
bootstrap();
