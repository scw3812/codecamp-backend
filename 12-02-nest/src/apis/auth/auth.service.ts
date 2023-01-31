import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  getAccessToken(id: string, email: string): string {
    const accessToken = this.jwtService.sign(
      { sub: id, email },
      { secret: 'access-key', expiresIn: '1d' },
    );
    return accessToken;
  }
}
