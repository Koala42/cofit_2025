import { Global, Module } from '@nestjs/common';
import { DB_CONNECTION } from './db.constant';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';

@Global()
@Module({
  providers: [
    {
      provide: DB_CONNECTION,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.getOrThrow<string>('DATABASE_URL');
        return drizzle(databaseUrl, { schema });
      },
    },
  ],
  exports: [DB_CONNECTION],
})
export class DbModule {}
