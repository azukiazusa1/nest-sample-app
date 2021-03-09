import { NotFoundException, Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Book } from './book';
import { BooksService } from './books.service';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query((returns) => Book)
  async getAuthor(@Args('id') id: number) {
    const book = await this.authorsService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation((returns) => Book)
  addBook(@Args('newBook') newBook: newBookInput): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeRecipe(@Args('id') id: string) {
    return this.booksService.remove(id);
  }
}
