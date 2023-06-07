import { Injectable } from '@nestjs/common';
import { PrismaService } from 'libs/api/data-access-api/src/lib/prisma.service';
import { CreateOneLabelArgs } from 'libs/api/generated-db-types/src/lib';

@Injectable()
export class LabelService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneLabelArgs: CreateOneLabelArgs) {
    return this.prisma.label.create(createOneLabelArgs);
  }

  findAll() {
    return this.prisma.label.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} label`;
  }

  // update(id: number, updateLabelInput: UpdateLabelInput) {
  //   return `This action updates a #${id} label`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} label`;
  // }
}
