// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(id_user: string, ds_email: string) {
    // Aqui seria interessante validar no banco
    const user = await this.usersService.getUserbyId(id_user);
    console.log('🚀 + AuthService + login + user:', user);

    const payload = { email: ds_email, sub: id_user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
