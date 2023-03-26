import type { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';
import type { TResOrder } from '../shared/types/types';
import { getCancel, getOrder } from './../shared/api/productApi';

export default function useGetOrderQuery(path: string) {
  const order = useInfiniteQuery<AxiosResponse<TResOrder>, AxiosError>(
    'order',
    ({ pageParam = 1 }) => getOrder(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 10);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      enabled: Boolean(path === 'mypage'),
      staleTime: 10 * 1000,
      // cacheTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );
  const cancel = useInfiniteQuery<AxiosResponse<TResOrder>, AxiosError>(
    'cancel',
    ({ pageParam = 1 }) => getCancel(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 10);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      enabled: Boolean(path === 'cancel'),
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  return path === 'mypage' ? order : path === 'cancel' ? cancel : undefined;
}
