import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import type { IList, TResOrder } from '../shared/types/types';
import { getCancel, getOrder } from './../shared/api/productApi';

export default function useOrder() {
  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split('/');
  const keyName = path === 'mypage' ? 'order' : 'cancel';

  const fetchData = ({ pageParam = 1 }) => {
    switch (keyName) {
      case 'order': {
        return getOrder(pageParam);
      }
      case 'cancel': {
        return getCancel(pageParam);
      }
    }
  };

  const {
    data: orderQuery,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<AxiosResponse<TResOrder>, AxiosError>(
    [`${keyName}`],
    fetchData,
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 10);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      enabled: Boolean(keyName === 'order' || 'cancel'),
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );
  const getList = (list: TResOrder): IList[] => {
    if ('orderList' in list) return list.orderList;
    else return list.cancelList;
  };

  const orderData = useMemo(
    () => orderQuery?.pages.map(page => getList(page?.data)).flat() || null,
    [orderQuery]
  );

  return {
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    orderData,
  };
}
