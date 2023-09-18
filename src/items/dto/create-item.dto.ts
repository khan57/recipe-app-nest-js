import { ApiProperty } from '@nestjs/swagger';
import { CreateListingsDto } from './create-listing.dto';
import { CreateTagDto } from './create-tag.dto';
import { IsBoolean } from 'class-validator';

export class CreateItemDto {
  @IsBoolean()
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

  @ApiProperty({
    type: [CreateTagDto],
  })
  tags: CreateTagDto[];
}
