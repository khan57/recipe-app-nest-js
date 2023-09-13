import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({
    type: String,
    example: 'Haseeb',
    required: true,
  })
  firstName: string;

  @ApiProperty({
    type: String,
    example: 'ur rehman',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    example: 'haseeb57',
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    example: 'haseeb@mail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    example: 'admin@123',
    required: true,
  })
  password: string;
}
