import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';

/* THIS FILE IS NOT PART OF THE CHALLENGE */
@Module({
  providers: [SeederService],
  controllers: [SeederController],
})
export class SeederModule {}
