import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UsePipes,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Express } from 'express';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileSizeValidator } from 'src/shared/pipes/file-validator.pipe';
import { ApiTags } from '@nestjs/swagger';
@Controller('items')
  @ApiTags("Items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    // throw new BadRequestException("Unable to get all items")
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.itemsService.remove(+id);
  }

  @Post('/upload-receipt')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new FileSizeValidator())
  async uploadReceipt(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    return 'file uploaded successfully';
  }

  @Post('/upload-receipt-1')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new FileSizeValidator())
  async uploadReceipt1(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

    return 'file uploaded successfully';
  }
}
