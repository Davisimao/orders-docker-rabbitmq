import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: {
    ds_full_name: string;
    ds_email: string;
    cd_document: string;
    ds_password: string;
  }): Promise<User> {
    data.ds_password = await bcrypt.hash(data.ds_password, 10);
    return this.prisma.user.create({ data });
  }

  getAllusers() {
    return this.prisma.user.findMany();
  }

  async getUserbyId(id_user: string) {
    const user = await this.prisma.user.findUnique({ where: { id_user } });

    if (!user) {
      throw new BadRequestException('Usuário não existe');
    }

    return user;
  }

  deleteUser(id_user: string) {
    return this.prisma.user.delete({ where: { id_user } });
  }
}
