import type { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';
import type { TResWish } from '../shared/types/types';
import { getWish } from './../shared/api/productApi';

export default function useGetWishQuery() {
  const wishQuery = useInfiniteQuery<AxiosResponse<TResWish>, AxiosError>(
    'wish',
    ({ pageParam = 1 }) => getWish(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 12);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  return { wishQuery };
}
