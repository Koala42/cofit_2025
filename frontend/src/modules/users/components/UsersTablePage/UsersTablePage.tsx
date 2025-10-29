import { useEffect, useState } from 'react';
import { UsersTable } from '../UsersTable/UsersTable';
import type { User } from '../../../../types';
import { getUsersList } from '../../../../api';

export const UsersTablePage = () => {
    const [data, setData] = useState<User[]>([]);
    const [limit, setLimit] = useState<number>(100);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsersList(search, limit);
                setData(users);
            } catch {
                setData([]);
            }
        };
        fetchData();
    }, [search, limit]);

    return (
        <>
            <div style={{ display: 'flex', gap: 8 }}>
                <input
                    type='email'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Vyhledávání'
                />
                <input
                    type='number'
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                    placeholder='Limit'
                />
                <button onClick={() => setLimit(100)}>Limit 100</button>
                <button onClick={() => setLimit(1000)}>Limit 1000</button>
                <button onClick={() => setLimit(10_000)}>Limit 10 000</button>
                <button onClick={() => setLimit(100_000)}>Limit 100 000</button>
            </div>
            <UsersTable data={data} />
        </>
    );
};
