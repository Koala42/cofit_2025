import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('user', {
  id: serial('id').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  birthTimestamp: timestamp('birth_timestamp').notNull(),
  gender: text('gender').notNull(),
  companyId: integer('company_id'),
});

export const companyTable = pgTable('company', {
  id: serial('id').notNull(),
  name: text('name').notNull(),
  description: text('description'),
});
