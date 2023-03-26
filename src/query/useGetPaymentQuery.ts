import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getPayment } from './../shared/api/paymentApi';
import type { IPaymentResponse } from './../shared/types/types';

const useGetPaymentQuery = (type: string, p_No: number) => {
  return useQuery<AxiosResponse<IPaymentResponse>, Error>(
    'payment',
    () => getPayment(type, p_No),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useGetPaymentQuery;
