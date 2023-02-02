import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { CurrentUser } from 'src/commons/auth/gql-user.params';
import { GqlAuthRefreshGuard } from '../../commons/auth/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @Context() context,
  ): Promise<string> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnprocessableEntityException('이메일이 없습니다.');
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      throw new UnprocessableEntityException('암호가 틀렸습니다.');
    }

    this.authService.setRefreshToken(user.id, user.email, context.res);

    return this.authService.getAccessToken(user.id, user.email);
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(@CurrentUser() user) {
    return this.authService.getAccessToken(user.id, user.email);
  }
}
