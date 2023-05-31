import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  User,
  CreateOneUserArgs,
  UpdateOneUserArgs,
  FindUniqueUserArgs,
  DeleteOneUserArgs,
} from '../../../generated-db-types/src/lib';
import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../../../auth/src/lib/guards/jwt-auth.guard';
import { CheckAuthGuard } from '../../../auth/src/lib/guards/check-auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args() createOneUserArgs: CreateOneUserArgs) {
    return this.userService.create(createOneUserArgs);
  }

  // @UseGuards(CheckAuthGuard)
  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  user(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.userService.update(updateOneUserArgs);
  }

  @Mutation(() => User)
  removeUser(@Args() deleteOneUserArgs: DeleteOneUserArgs) {
    return this.userService.remove(deleteOneUserArgs);
  }
}
