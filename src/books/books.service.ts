import { Injectable } from '@nestjs/common';
import { Book } from './book';
import { newBookInput } from './dto/newBook.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepostiory: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepostiory.find();
  }

  findOneById(id: number): Promise<Book> {
    return this.booksRepostiory.findOne(id);
  }

  async create(data: newBookInput): Promise<Book> {
    const book = this.booksRepostiory.create(data);
    await this.booksRepostiory.save(book);
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepostiory.delete(id);
    return result.affected > 0;
  }
}
