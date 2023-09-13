import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async createUser(@Body() dto: CreateUserDTO): Promise<User> {
    return this.userService.create(dto);
  }
}
