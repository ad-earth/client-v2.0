import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import type { TError } from '../shared/types/types';
import { postLike } from './../shared/api/productApi';

const usePostLikeQuery = (productNo: number) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    () => postLike(Number(productNo)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['list']);
        queryClient.invalidateQueries('wish');
      },
    }
  );
};
export default usePostLikeQuery;
