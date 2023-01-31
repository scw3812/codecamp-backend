import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createUser.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { email, password, ...rest } = createUserInput;
    const user = await this.userRepository.findOne({
      email: createUserInput.email,
    });
    if (user) {
      throw new ConflictException('이미 등록된 이메일입니다');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userRepository.save({
      email,
      password: hashedPassword,
      ...rest,
    });
  }
}
