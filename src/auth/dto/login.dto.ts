import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  ds_password: string;

  @IsNotEmpty()
  @IsEmail()
  ds_email: string;
}
