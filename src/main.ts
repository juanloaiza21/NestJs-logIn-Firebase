import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

const NEST_LOGGING = false;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const opts: NestApplicationOptions = {};
  if (!NEST_LOGGING) { opts.logger = false; }
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      project_id: process.env.FIREBASE_PROJECT_ID
    } as Partial<admin.ServiceAccount>),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
  console.log("Conetado a firebase");
  await app.listen(3000);
}
bootstrap();
