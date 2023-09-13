import { ApiProperty } from '@nestjs/swagger';
import { CreateListingsDto } from './create-listing.dto';

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

  @ApiProperty({
    type: CreateListingsDto,
  })
  listing: CreateListingsDto;
}
