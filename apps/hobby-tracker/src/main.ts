/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import fastifyCookie from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const developmentContentSecurityPolicy = {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https://unpkg.com/',
      ],
    },
  };

  await app.register(fastifyCookie, {
    secret: 'SECRET',
    parseOptions: {
      httpOnly: true,
      expires: new Date(new Date().getTime() + 86400000),
    },
  });
  await app.register(helmet, {
    contentSecurityPolicy: developmentContentSecurityPolicy,
  });

  app.enableCors({
    origin: true,
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application playground is running on: http://localhost:${port}/graphiql`
  );
}

bootstrap();
