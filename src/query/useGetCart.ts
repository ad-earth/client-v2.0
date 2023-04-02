import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getCart } from './../shared/api/paymentApi';
import type { ICartResponse } from './../shared/types/types';

const useGetCart = () => {
  const { data: cartData } = useQuery<AxiosResponse<ICartResponse>, Error>(
    [queryKeys.CART],
    () => getCart(),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { cartList } = useMemo(
    () => ({
      cartList: cartData?.data.cartList,
    }),
    [cartData]
  );

  return { cartList };
};

export default useGetCart;
