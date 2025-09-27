import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(200)
  login(@Body('ds_password') ds_password: string, @Body('ds_email') ds_email: string) {
    return this.authService.login(ds_password, ds_email);
  }
}
