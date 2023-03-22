import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { deleteCart } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

type TData = {
  type: string;
  p_Nos: string;
};

const DeleteCart = async (data: TData) => {
  const res = await deleteCart(data.type, data.p_Nos);
  return res;
};

const useDeleteCartQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    (data: TData) => DeleteCart(data),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts']),
    }
  );
};

export default useDeleteCartQuery;
