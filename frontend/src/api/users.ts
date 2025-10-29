import type { User } from '../types';

export const getUsersList = async (search?: string, limit?: number): Promise<User[]> => {
    try {
        const response = await fetch(`https://backend-summer-field-2779.fly.dev/?search=${search}&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw new Error('Failed to fetch user list');
    }
};
