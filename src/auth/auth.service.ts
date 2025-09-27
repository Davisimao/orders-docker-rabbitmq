// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(ds_password: string, ds_email: string) {
    const user = await this.usersService.getUserbyEmail(ds_email);
    if (!user) {
      throw new UnauthorizedException('email ou senha inválidos');
    }

    const passwordValid = await bcrypt.compare(ds_password, user.ds_password);
    if (!passwordValid) {
      throw new UnauthorizedException('email ou senha inválidos');
    }

    const payload = { email: ds_email, sub: user.id_user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
