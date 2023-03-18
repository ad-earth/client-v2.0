import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { putCart } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

type TData = {
  type: string;
  productNo: number;
  option: (string | number)[][];
  keyword?: string;
};

const usePutCartQuery = ({ type, productNo, option, keyword }: TData) => {
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(() =>
    putCart(type, productNo, option, keyword)
  );
};
export default usePutCartQuery;
