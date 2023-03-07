import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ReviewsResponseType } from '../shared/types/types';
import { getReviews } from '../shared/api/apis';

const useGetReviewsQuery = (productNo: number, page: number) => {
  return useQuery<AxiosResponse<ReviewsResponseType>, Error>(
    'review',
    () => getReviews(productNo, page),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetReviewsQuery;
