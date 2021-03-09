import { Field, InputType } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class newBookInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Min(9999)
  @Max(10)
  price: number;

  @Field((type) => [String])
  authors: string[];
}
