import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
