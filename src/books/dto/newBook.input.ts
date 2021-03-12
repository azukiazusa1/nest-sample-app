import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class newBookInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field((type) => Int)
  @Min(0)
  @Max(9999)
  price: number;

  @Field()
  author: string;
}
