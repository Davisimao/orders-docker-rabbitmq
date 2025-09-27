import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  ds_password: string;

  @IsNotEmpty()
  ds_email: string;
}
