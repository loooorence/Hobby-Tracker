import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/api/data-access-api/src';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from 'libs/api/generated-db-types/src/lib';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneUserArgs: CreateOneUserArgs) {
    return this.prisma.user.create(createOneUserArgs);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(findUniqueUserArgs);
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}
