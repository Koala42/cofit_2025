import type { User } from '../../../../types';

export interface IRelativesCounterProps {
    data: User[];
}

export const RelativesCounter = ({ data }: IRelativesCounterProps) => {
    return <td>{data.reduce((acc, user) => acc + (user.lastName === data[0].lastName ? 1 : 0), 0)}</td>;
};
