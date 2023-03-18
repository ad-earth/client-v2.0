import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getReviews } from '../shared/api/apis';
import type { IReviewsResponse } from '../shared/types/types';

const useGetReviewsQuery = (productNo: number, page: number) => {
  return useQuery<AxiosResponse<IReviewsResponse>, Error>(
    'review',
    () => getReviews(productNo, page),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetReviewsQuery;
