import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
/* import { SeederModule } from './seeder/seeder.module'; */

/* THIS FILE IS NOT PART OF THE CHALLENGE */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule /* SeederModule*/,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
