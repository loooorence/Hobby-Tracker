import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from 'libs/api/data-access-api/src';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
      secret: 'JWT_SECRET', // TODO: Add env variables
    }),
  ],
})
export class AuthModule {}
