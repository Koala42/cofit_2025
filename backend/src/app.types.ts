import { CompanySelect, UserSelect } from './db/db.types';

/* THIS FILE IS NOT PART OF THE CHALLENGE */

export interface UserResponse extends Omit<UserSelect, 'companyId'> {
  company: CompanySelect | null;
}

export interface ResponseData<T> {
  data: T[];
  count: number;
  totalCount: number;
}
