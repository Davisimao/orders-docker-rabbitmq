import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body('id_user') id_user: string, @Body('ds_email') ds_email: string) {
    return this.authService.login(id_user, ds_email);
  }
}
