import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseData, UserResponse } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(
    @Query('search') searchString: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number,
  ): Promise<ResponseData<UserResponse>> {
    return this.appService.getUsers(searchString || null, limit || null);
  }
}
