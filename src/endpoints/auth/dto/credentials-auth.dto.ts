import { IsEmail, IsNotEmpty } from 'class-validator';

export class CredentialsAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
