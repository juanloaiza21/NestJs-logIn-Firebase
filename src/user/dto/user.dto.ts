import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserDTO {
 
  @IsString()
  @MinLength(4)
  displayName: string;

  @IsString()
  @IsEmail()
  email: string;

   @IsString()
   @MinLength(8)
   password: string;

  @IsString()
  @MinLength(4)
   role: string;

  @IsString()
  @MinLength(10)
  id: string;
}