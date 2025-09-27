import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(201)
  createUser(@Body() data: { ds_full_name: string; ds_email: string; cd_document: string }) {
    return this.userService.createUser(data);
  }

  @Get()
  getuser() {
    return this.userService.getAllusers();
  }

  @Get(':id')
  getUserbyId(@Param('id') id_user: string) {
    return this.userService.getUserbyId(id_user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id_user: string) {
    return this.userService.deleteUser(id_user);
  }
}
