import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getCart } from './../shared/api/paymentApi';
import type { ICartResponse } from './../shared/types/types';

const useGetCartQuery = () => {
  return useQuery<AxiosResponse<ICartResponse>, Error>(
    'carts',
    () => getCart(),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetCartQuery;
