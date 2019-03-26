import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';
// import { ValidationPipe } from 'pipes/validation.pipe';
import { RolesGuard } from './guards/role.guard';
import { Reflector } from '@nestjs/core';

import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  // cast platform type e.g. 'express' or 'fastify'
  const app = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
  );
  // A public folder to serve static files
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  // set ejs as the view engine
  app.set('view engine', 'ejs');
  // ENV
  require('dotenv').config();

  // WE CAN USE PIPES GLOBALLY
  // app.useGlobalPipes(new ValidationPipe());

  // WE CAN USE GUARDS GLOBALLY
  // throw new UnauthorizedException();
  app.useGlobalGuards(new RolesGuard(new Reflector()));

  // The useGlobalPipes() and useGlobalGuards() methods doesn't set up pipes/guards
  // for gateways and micro services (whereas hybrid app feature is being used).

  await app.listen(3000);
}
bootstrap();
