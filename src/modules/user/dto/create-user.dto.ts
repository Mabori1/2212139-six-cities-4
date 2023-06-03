import { UserType } from '../../../types/user-type.enum.js';
import { IsEmail, IsString, Length, IsEnum } from 'class-validator';

export default class CreateUserDto {
  @IsString({ message: 'name is required' })
  @Length(1, 15, { message: 'Min length is 1, max is 15' })
  public name!: string;

  @IsString({ message: 'email is required' })
  @IsEmail({}, { message: 'email must be valid address' })
  public email!: string;

  public avatarUrl!: string;

  @IsString({ message: 'userType is required' })
  @IsEnum(UserType, { message: 'type must be one of pro or обычный' })
  public userType!: UserType;

  @IsString({ message: 'password is required' })
  @Length(6, 12, { message: 'Min length for password is 6, max is 12' })
  public password!: string;
}
