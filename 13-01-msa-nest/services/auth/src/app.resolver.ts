import { Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Mutation(() => String)
  login(data) {
    console.log(data);
    return 'login success';
  }
}
