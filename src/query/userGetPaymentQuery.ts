import { useQuery } from 'react-query';
import { getPayment } from './../shared/api/apis';

const useGetPaymentQuery = (type: string, p_No: number) => {
  return useQuery('payment', () => getPayment(type, p_No), {
    refetchOnWindowFocus: false,
  });
};

export default useGetPaymentQuery;
