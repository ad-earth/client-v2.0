import type { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';
import { getCancel, getOrder } from '../shared/api/apis';
import type { MyAPIResOrder } from '../shared/types/types';

export default function useGetOrderQuery(path: string) {
  const order = useInfiniteQuery<AxiosResponse<MyAPIResOrder>, AxiosError>(
    [`${path}`],
    ({ pageParam = 1 }) => getOrder(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 10);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      enabled: Boolean(path === 'mypage'),
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );
  const cancel = useInfiniteQuery<AxiosResponse<MyAPIResOrder>, AxiosError>(
    ['canceList'],
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
