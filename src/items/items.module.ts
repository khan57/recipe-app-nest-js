import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports:[TypeOrmModule.forFeature([Item,Listing])]
})
export class ItemsModule {}
