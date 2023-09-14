import { ApiProperty } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateItemDto {
  @ApiProperty({
    type: Boolean,
  })
  public: boolean;
  @ApiProperty({
    type: [CreateCommentDto],
  })
  comments: CreateCommentDto[];
}
