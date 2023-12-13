import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com', description: 'Email du compte' })
  @IsEmail()
  email: string;
  
  @ApiProperty({
    type: String,
    example: 'azertyuiop',
    description: '6 caractères minimum.',
  })
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'John' })

  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
 
  @IsNotEmpty()
  lastName: string;
}
