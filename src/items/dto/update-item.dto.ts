import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto {
  @ApiProperty({
    type: Boolean,
  })
  public: boolean;
}
