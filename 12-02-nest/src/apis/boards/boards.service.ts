import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getHello() {
    return 'Hello World';
  }
}
