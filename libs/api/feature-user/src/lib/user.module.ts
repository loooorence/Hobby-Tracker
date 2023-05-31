import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '../../../data-access-api/src/';

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
