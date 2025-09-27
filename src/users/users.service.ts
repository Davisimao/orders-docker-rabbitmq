import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUser(data: { ds_full_name: string; ds_email: string; cd_document: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  deleteUser(id_user: string) {
    return this.prisma.user.delete({ where: { id_user } });
  }
}
