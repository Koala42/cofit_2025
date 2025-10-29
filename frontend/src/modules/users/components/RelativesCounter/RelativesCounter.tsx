import type { User } from '../../../../types';

export interface IRelativesCounterProps {
    data: User[];
    lastName: string;
}

export const RelativesCounter = ({ data, lastName }: IRelativesCounterProps) => {
    return <td>{data.reduce((acc, user) => acc + (user.lastName === lastName ? 1 : 0), 0)}</td>;
};
