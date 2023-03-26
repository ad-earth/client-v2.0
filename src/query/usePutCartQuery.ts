import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import type { TError } from '../shared/types/types';
import { putCart } from './../shared/api/paymentApi';

type TData = {
  type: string;
  productNo: number;
  option: (string | number)[][];
  key?: number;
};

const usePutCartQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    ({ type, productNo, option, key }: TData) =>
      putCart(type, productNo, option, key),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts']),
    }
  );
};
export default usePutCartQuery;
