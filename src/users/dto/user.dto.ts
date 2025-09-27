import { IsEmail, IsNotEmpty, IsNumberString, IsString, IsStrongPassword } from 'class-validator';

export class UserCreate {
  @IsNumberString()
  @IsNotEmpty()
  cd_document: string;

  @IsEmail()
  @IsNotEmpty()
  ds_email: string;

  @IsString()
  @IsNotEmpty()
  ds_full_name: string;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  ds_password: string;
}
