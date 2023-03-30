import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getWish } from '../shared/api/productApi';
import type { TResWish } from '../shared/types/types';

export default function useWish() {
  const wishQuery = useInfiniteQuery(
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
      select: data => ({
        pages:
          [...data.pages]
            .map((list: AxiosResponse<TResWish>) => list?.data?.wishList)
            .flat() || null,
        pageParams: [...data.pageParams],
      }),
    }
  );

  const { wishCnt, wishData, wishLike } = useMemo(
    () => ({
      wishCnt: wishQuery?.data?.pages.length || 0,
      wishData: wishQuery?.data?.pages || [],
      wishLike: wishQuery?.data?.pages.map(list => list.p_No) || [],
    }),
    [wishQuery]
  );

  return {
    wishQuery,
    wishCnt,
    wishData,
    wishLike,
  };
}
