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

  setRefreshToken(id: string, email: string, res: any) {
    const refreshToken = this.jwtService.sign(
      { sub: id, email },
      { secret: 'refresh-key', expiresIn: '30d' },
    );

    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);

    // res.setHeader('Access-Control-Allow-Origin', 'https://frontend.com');
    // res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/; domain=.backend.com; SameSite=None; Secure; httpOnly;`);
  }
}
