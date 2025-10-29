import { Inject, Injectable } from '@nestjs/common';
import { DB_CONNECTION } from './db/db.constant';
import { type DbConnection } from './db/db.types';
import { ResponseData, UserResponse } from './app.types';
import { companyTable, usersTable } from './db/schema';

@Injectable()
export class AppService {
  constructor(@Inject(DB_CONNECTION) private readonly db: DbConnection) {}

  /**
   * Get users and companies
   * @returns ResponseData - UserResponse
   */
  public async getUsers(
    searchString: string | null = null,
    limit: number | null = null,
  ): Promise<ResponseData<UserResponse>> {
    const users = await this.db.select().from(usersTable);
    const companies = await this.db.select().from(companyTable);

    let items: UserResponse[] = [];
    for (const user of users) {
      const foundCompany =
        companies.find((company) => company.id === user.companyId) || null;

      items.push({
        ...user,
        company: foundCompany,
      });
    }

    if (searchString) {
      items = items.filter((item) =>
        `${item.firstName} ${item.lastName}`.includes(
          searchString.toLowerCase(),
        ),
      );
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return {
      data: items,
      count: items.length,
      totalCount: users.length,
    };
  }
}
