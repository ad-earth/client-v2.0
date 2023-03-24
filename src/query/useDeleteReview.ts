import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { deleteReview } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    (reviewNo: number) => deleteReview(reviewNo),
    {
      onSuccess: () => queryClient.invalidateQueries('review'),
    }
  );
};

export default useDeleteReview;
