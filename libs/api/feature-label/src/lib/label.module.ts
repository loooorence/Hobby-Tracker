import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelResolver } from './label.resolver';
import { PrismaModule } from 'libs/api/data-access-api/src/lib/prisma.module';

@Module({
  providers: [LabelResolver, LabelService],
  imports: [PrismaModule],
})
export class LabelModule {}
