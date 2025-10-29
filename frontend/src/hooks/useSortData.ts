// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSortData = (data: any[], key: string, ascending: boolean) => {
    return data.sort((a, b) => {
        if (a[key] < b[key]) return ascending ? -1 : 1;
        if (a[key] > b[key]) return ascending ? 1 : -1;
        return 0;
    });
};
