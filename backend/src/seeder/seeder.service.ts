import { Inject, Injectable } from '@nestjs/common';
import { DB_CONNECTION } from 'src/db/db.constant';
import { type DbConnection } from 'src/db/db.types';
import * as schema from './../db/schema';
import { seed } from 'drizzle-seed';
import { eq } from 'drizzle-orm';

/* THIS FILE IS NOT PART OF THE CHALLENGE */
@Injectable()
export class SeederService {
  constructor(@Inject(DB_CONNECTION) private readonly db: DbConnection) {}

  public async seed(): Promise<void> {
    await this.db.delete(schema.usersTable);
    await this.db.delete(schema.companyTable);

    // When running locally, you can use lower seed counts to make it faster
    await seed(this.db, schema, { count: 26_000 }).refine(() => ({
      usersTable: {
        count: 25_000,
      },
      companyTable: {
        count: 1000,
      },
    }));

    const companies = await this.db.select().from(schema.companyTable);
    const users = await this.db.select().from(schema.usersTable);
    for (const user of users) {
      const randomIndex = Math.floor(Math.random() * companies.length);
      const randomCompany = companies[randomIndex];
      await this.db
        .update(schema.usersTable)
        .set({ companyId: randomCompany.id })
        .where(eq(schema.usersTable.id, user.id));
    }
  }
}
