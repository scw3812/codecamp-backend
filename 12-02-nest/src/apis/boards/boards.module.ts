import { Module } from '@nestjs/common';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './boards.service';

@Module({
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
