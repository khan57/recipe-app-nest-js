import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidator implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const maxFileSize = 1 * 1024 * 1024; // 2mb

    if (value.size > maxFileSize) {
      throw new BadRequestException(
        `File size ${value.size}) exceeds ${maxFileSize}`,
      );
    }

    return value;
  }
}
