import { Query, Resolver } from '@nestjs/graphql';

import { BoardService } from './boards.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String)
  getHello() {
    return this.boardService.getHello();
  }
}
