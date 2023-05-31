import { CookieSerializeOptions } from '@fastify/cookie';
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

const domain = 'localhost';
const jwtExpiresSecond = 36000;

const HTTP_ONLY_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSecond), // cookie lives same amount of time as jwt
  httpOnly: true,
  signed: true,
  domain,
};

const USERS_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSecond), // cookie lives same amount of time as jwt
  domain,
};

@Injectable()
export class SetAuthGuard extends AuthGuard('local') {
  constructor(private jwtService: JwtService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    const request = context_.getContext();
    // should be the same name as args
    request.body = context_.getArgs().loginUserInput;
    return request;
  }

  override handleRequest(error: any, user: any, info: any, context: any) {
    if (error || !user || info) throw error || new UnauthorizedException();

    const authContext = GqlExecutionContext.create(context);
    const { reply } = authContext.getContext();

    const jwtExpiresMs = Number(jwtExpiresSecond) * 1000;
    const tokenExpires = Date.now() + jwtExpiresMs;
    const accessToken = this.jwtService.sign({ sub: user.id });

    reply.setCookie('token', accessToken, HTTP_ONLY_COOKIE);
    reply.setCookie('token-expires', tokenExpires.toString(), USERS_COOKIE);

    return user;
  }
}
