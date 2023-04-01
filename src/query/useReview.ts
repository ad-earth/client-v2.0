import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { postReviews } from '../shared/api/productApi';

type TReview = {
  id: number;
  review: {
    r_Content: string;
    r_Score: number;
  };
};

export default function useReview() {
  const queryClient = useQueryClient();

  const addReview = useMutation<AxiosResponse, AxiosError, TReview>(
    ({ id, review }) => postReviews(id, review.r_Content, review.r_Score),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('order');
        queryClient.invalidateQueries('orderDetail');
        toast.success('리뷰등록이 완료되었습니다!');
      },
    }
  );

  return { addReview };
}
