import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'libs/api/generated-db-types/src/lib';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token!: string;

  @Field(() => User)
  user!: User;
}
