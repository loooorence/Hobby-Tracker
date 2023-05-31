import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUpUserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  name!: string;
}
