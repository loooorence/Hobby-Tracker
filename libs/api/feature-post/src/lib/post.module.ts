import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'libs/api/data-access-api/src';

@Module({
  providers: [PostResolver, PostService],
  imports: [PrismaModule],
})
export class PostModule {}
