import {
  Controller,
  Get,
  Headers,
  ParseIntPipe,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseData, UserResponse } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(
    @Headers('authorization') authorizationHeader: string,
    @Query('search') searchString: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number,
  ): Promise<ResponseData<UserResponse>> {
    const headerBody = authorizationHeader.split('.')[1];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const bodyPayload = JSON.parse(atob(headerBody));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!bodyPayload['admin']) {
      throw new UnauthorizedException(
        'You have to be an admin to access this resource',
      );
    }

    return this.appService.getUsers(searchString || null, limit || null);
  }
}
