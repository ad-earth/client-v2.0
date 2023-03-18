import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { postLike } from '../shared/api/apis';
import type { ErrorType } from '../shared/types/types';

const usePostLikeQuery = (productNo: number) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<ErrorType>, any, unknown>(
    () => postLike(Number(productNo)),
    {
      onSuccess: () => queryClient.invalidateQueries(['list']),
    }
  );
};
export default usePostLikeQuery;
