import { Module } from '@nestjs/common';
import {  BookModule } from '../../application/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from '../../application/book/schema/book.schema';
import { ConfigModule } from '@nestjs/config';

//let processString:string = process.env.MONGODB_URI || '';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI ?? 'mongodb://mongo:27017/mongo-Database'), // Provide a default URI
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
