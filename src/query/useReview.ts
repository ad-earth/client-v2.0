import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import {
  deleteReview,
  getReviews,
  postReviews,
} from '../shared/api/productApi';
import type { IReviewsResponse, TError } from '../shared/types/types';

type TReview = {
  id: number;
  review: {
    r_Content: string;
    r_Score: number;
  };
};

export default function useReview() {
  const [searchParams] = useSearchParams();
  const { productNo } = useParams();
  const page = searchParams.get('page');

  const { data } = useQuery<AxiosResponse<IReviewsResponse>, Error>(
    queryKeys.REVIEW,
    () => getReviews(Number(productNo), Number(page)),
    {
      refetchOnWindowFocus: false,
    }
  );

  const queryClient = useQueryClient();

  const addReview = useMutation<AxiosResponse, AxiosError, TReview>(
    ({ id, review }) => postReviews(id, review.r_Content, review.r_Score),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.ORDER);
        queryClient.invalidateQueries(queryKeys.ORDERPRODUCT);
        toast.success('리뷰등록이 완료되었습니다!');
      },
    }
  );

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    any,
    unknown
  >((reviewNo: number) => deleteReview(reviewNo), {
    onSuccess: () => queryClient.invalidateQueries('review'),
  });

  return { data, addReview, mutate };
}
