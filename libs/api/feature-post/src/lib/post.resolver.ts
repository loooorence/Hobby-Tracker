import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import {
  Post,
  CreateOnePostArgs,
  FindUniquePostArgs,
  UpdateOnePostArgs,
  DeleteOnePostArgs,
} from '../../../generated-db-types/src/lib';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args() createOnePostArgs: CreateOnePostArgs) {
    return this.postService.create(createOnePostArgs);
  }

  @Query(() => [Post])
  posts() {
    return this.postService.findAll();
  }

  @Query(() => Post)
  post(@Args() findUniquePostArgs: FindUniquePostArgs) {
    return this.postService.findOne(findUniquePostArgs);
  }

  @Mutation(() => Post)
  updatePost(@Args() updateOnePostArgs: UpdateOnePostArgs) {
    return this.postService.update(updateOnePostArgs);
  }

  @Mutation(() => Post)
  removePost(@Args() deleteOnePostArgs: DeleteOnePostArgs) {
    return this.postService.remove(deleteOnePostArgs);
  }
}
