import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { putCart } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

type TData = {
  type: string;
  productNo: number;
  option: (string | number)[][];
  key?: number;
};

const usePutCartQuery = ({ type, productNo, option, key }: TData) => {
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(() =>
    putCart(type, productNo, option, key)
  );
};
export default usePutCartQuery;
