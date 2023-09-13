import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    type: Boolean,
    default: true,
    required: false,
  })
  public: boolean;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Some item name',
  })
  name: string;
}
