import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import type { IReviewsResponse } from '../shared/types/types';
import { getReviews } from './../shared/api/productApi';

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
