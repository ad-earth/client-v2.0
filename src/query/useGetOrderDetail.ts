import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getOrderDetail } from '../shared/api/apis';
import type { IMyAPIResOrderDetail } from '../shared/types/types';

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
