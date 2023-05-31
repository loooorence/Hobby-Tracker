import { AuthGuard } from '@nestjs/passport';
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class CheckAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    return context_.getContext().req;
  }

  // override handleRequest(error: any, user: any, info: any, context: any) {
  //   console.log(user, info, error);
  //   if (!user || info || error) {
  //     const context_ = GqlExecutionContext.create(context);
  //     const reply = context_.getContext().reply;

  //     // reply.setCookie('token', '');
  //     // reply.setCookie('token-expires', '');
  //     console.log('check-auth error');
  //     throw error || new UnauthorizedException();
  //   }

  //   return user;
  // }
}
