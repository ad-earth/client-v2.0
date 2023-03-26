import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import type { IMyAPIResOrderDetail } from '../shared/types/types';
import { getOrderDetail } from './../shared/api/productApi';

export default function useGetOrderDetail(id: string) {
  const order = useQuery<AxiosResponse<IMyAPIResOrderDetail>, AxiosError>(
    ['orderDetail', id],
    () => getOrderDetail(id),
    {
      enabled: !!id,
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
    }
  );
  return order;
}
