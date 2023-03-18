import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { putCart } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

const usePutCartQuery = (
  type: string,
  productNo: number,
  option: (string | number)[][],
  keyword?: string
) => {
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(() =>
    putCart(type, productNo, option, keyword)
  );
};
export default usePutCartQuery;
