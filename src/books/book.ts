import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field((type) => [String])
  authors: string[];

  @Field((type) => Int)
  price: number;

  @Field()
  createdAt: Date;
}
