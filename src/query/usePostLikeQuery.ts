import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ErrorType } from '../shared/types/types';
import { postLike } from '../shared/api/apis';

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
