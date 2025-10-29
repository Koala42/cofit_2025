import type { Company } from './company';

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    birthTimestamp: number;
    gender: string;
    company: Company | null;
};
