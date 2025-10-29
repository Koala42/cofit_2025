export type ApiResponse<T> = {
  data: T;
  count: number;
  totalCount: number;
};