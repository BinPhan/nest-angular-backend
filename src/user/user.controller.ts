import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {

  userService: UserService
  constructor(userService: UserService) {
    this.userService = userService
  }


  @Get()
  async findAll(@Req() request: Request): Promise<any> {

    let res = await this.userService.findAll()

    return res
  }

  @Post()
  async addUser(@Req() request: Request) {
    let user = {
      username: request.body.userName,
      name: request.body.name,
      password: await bcrypt.hash(request.body.password, 10),
    }
    this.userService.addUser(user)
    return true;
  }
}
