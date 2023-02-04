import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'aaa' })
  login(data) {
    console.log(data);
    return 'login success';
  }
}
