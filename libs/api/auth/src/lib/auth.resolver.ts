import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  GqlContextType,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { CurrentUser } from './currentUser.decorator';
import { User } from 'libs/api/generated-db-types/src/lib';
import { SetAuthGuard } from './guards/set-auth.guard';
import { SignUpUserInput } from './dto/signup-user';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(SetAuthGuard)
  Login(
    @Args('loginUserInput') loginUserInput: LoginUserInput
    // @CurrentUser() user: User
    // @Context() context
  ) {
    return this.authService.login(loginUserInput);
  }

  @Mutation(() => LoginResponse)
  SignUp(@Args('signUpInput') signUpInput: SignUpUserInput) {
    return this.authService.signUp(signUpInput);
  }
}
