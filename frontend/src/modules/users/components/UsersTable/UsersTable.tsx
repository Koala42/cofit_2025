import type { User } from '../../../../types';
import { useSortData } from '../../../../hooks';
import { RelativesCounter } from '../RelativesCounter';

export interface IUsersTableProps {
    data: User[];
}

export const UsersTable = ({ data }: IUsersTableProps) => {
    let sortedData = useSortData(data, 'lastName', true);

    return (
        <table>
            <tr>
                <td>Jméno</td>
                <td>Příjmení</td>
                <td>Počet příbuzných</td>
                <td>Společnost</td>
                <td>Pohlaví</td>
                <td>Datum narození</td>
            </tr>
            {sortedData.map(({ firstName, lastName, company, gender, birthTimestamp }) => (
                <tr key={lastName}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <RelativesCounter data={data} lastName={lastName} />
                    <td>{company?.name}</td>
                    <td>{gender}</td>
                    <td>{new Date(birthTimestamp).toLocaleDateString()}</td>
                </tr>
            ))}
        </table>
    );
};
