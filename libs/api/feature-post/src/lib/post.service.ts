import { Injectable } from '@nestjs/common';
import {
  CreateOnePostArgs,
  FindUniquePostArgs,
  UpdateOnePostArgs,
  DeleteOnePostArgs,
} from 'libs/api/generated-db-types/src/lib';
import { PrismaService } from 'libs/api/data-access-api/src';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOnePostArgs: CreateOnePostArgs) {
    return this.prisma.post.create(createOnePostArgs);
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {
        author: { select: { name: true } },
        Label: { select: { name: true } },
      },
    });
  }

  findOne(findUniquePostArgs: FindUniquePostArgs) {
    return this.prisma.post.findUnique(findUniquePostArgs);
  }

  update(updateOnePostArgs: UpdateOnePostArgs) {
    return this.prisma.post.update(updateOnePostArgs);
  }

  remove(deleteOnePostArgs: DeleteOnePostArgs) {
    return this.prisma.post.delete(deleteOnePostArgs);
  }
}
