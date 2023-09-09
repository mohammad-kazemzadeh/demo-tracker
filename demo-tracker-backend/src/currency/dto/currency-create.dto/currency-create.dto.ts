import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CurrencyCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
