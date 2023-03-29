import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type {
  IList,
  IMyAPIResOrderDetail,
  TResOrder,
} from '../shared/types/types';
import {
  getCancel,
  getOrder,
  getOrderDetail,
  putCancel,
} from './../shared/api/productApi';

type TCancel = {
  p_Id: string;
  p_No: number[];
};

export default function useOrder() {
  const { id } = useParams<{ id: string }>();

  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split('/');
  const keyName = path === 'mypage' ? 'order' : 'cancel';

  const queryClient = useQueryClient();

  const navigate = useNavigate();

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
  const orderQuery = useInfiniteQuery<AxiosResponse<TResOrder>, AxiosError>(
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
  /** Data Filtering */
  const orderData = useMemo(
    () =>
      orderQuery?.data?.pages.map(page => getList(page?.data)).flat() || null,
    [orderQuery]
  );

  const detailQuery = useQuery<AxiosResponse<IMyAPIResOrderDetail>, AxiosError>(
    ['orderDetail', id],
    () => getOrderDetail(id),
    {
      enabled: !!id,
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );
  /** Data Filtering */
  const { detailData, cancelPrice } = useMemo(
    () => ({
      detailData: detailQuery?.data?.data.products || [],
      cancelPrice: detailQuery?.data?.data.products
        .map(el => el.o_Status === '취소완료' && el.p_Price)
        .reduce((prev, curr) => prev + curr, 0),
    }),
    [detailQuery]
  );

  const cancelProduct = useMutation<AxiosResponse, AxiosError, TCancel>(
    ({ p_Id, p_No }) => putCancel(p_Id, p_No),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('order');
        alert('주문을 취소하였습니다.');
        navigate('/mypage');
      },
    }
  );

  return {
    orderQuery,
    orderData,
    detailQuery,
    detailData,
    cancelPrice,
    cancelProduct,
  };
}
