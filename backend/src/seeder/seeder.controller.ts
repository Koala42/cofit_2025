import { Controller, Get } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seed')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get('')
  public async seed(): Promise<void> {
    await this.seederService.seed();
  }
}
