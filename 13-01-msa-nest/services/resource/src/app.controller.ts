import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd22: 'bbb' })
  fetchBoards() {
    return 'boards data';
  }
}
