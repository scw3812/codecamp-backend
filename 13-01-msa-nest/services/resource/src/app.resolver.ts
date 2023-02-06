import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  fetchBoards() {
    return 'boards data';
  }
}
