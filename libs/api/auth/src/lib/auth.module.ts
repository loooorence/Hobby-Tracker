import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from 'libs/api/data-access-api/src';
import { LocalStrategy } from './guards/strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'libs/api/feature-user/src/';
import { JwtStrategy } from './guards/strategy/jwt.strategy';

@Module({
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
      secret: process.env.JWT_SECRET,
    }),
  ],
})
export class AuthModule {}
