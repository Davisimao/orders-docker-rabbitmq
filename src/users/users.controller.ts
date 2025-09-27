import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(201)
  createUser(data: { ds_full_name: string; ds_email: string; cd_document: string }) {
    return this.userService.createUser(data);
  }
}
