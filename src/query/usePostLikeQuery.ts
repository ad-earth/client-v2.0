import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import queryKeys from '../constants/queryKeys';
import type { TError } from '../shared/types/types';
import { postLike } from './../shared/api/productApi';

const usePostLikeQuery = (productNo: number) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    () => postLike(Number(productNo)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.AD);
        queryClient.invalidateQueries(queryKeys.WISH);
        queryClient.invalidateQueries(queryKeys.DETAIL);
      },
    }
  );
};
export default usePostLikeQuery;
