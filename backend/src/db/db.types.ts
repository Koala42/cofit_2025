import { NeonDatabase } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
import { InferSelectModel } from 'drizzle-orm';

export type DbConnection = NeonDatabase<typeof schema>;

export type UserSelect = InferSelectModel<(typeof schema)['usersTable']>;
export type CompanySelect = InferSelectModel<(typeof schema)['companyTable']>;
