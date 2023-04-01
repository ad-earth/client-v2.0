import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { deleteCart, getCart, putCart } from './../shared/api/paymentApi';
import type { ICartResponse, TError } from './../shared/types/types';

type TUpdateData = {
  type: string;
  productNo: number;
  option: (string | number)[][];
  key?: number;
};
type TRemoveData = {
  type: string;
  p_Nos: string;
};

const useGetCartQuery = () => {
  const queryClient = useQueryClient();

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

  const updateCartItem = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    TUpdateData
  >(data => putCart(data.type, data.productNo, data.option, data.key), {
    onSuccess: () => queryClient.invalidateQueries([queryKeys.CART]),
  });

  const removeCartItem = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    TRemoveData
  >(data => deleteCart(data.type, data.p_Nos), {
    onSuccess: () => queryClient.invalidateQueries([queryKeys.CART]),
  });

  return { cartList, updateCartItem, removeCartItem };
};

export default useGetCartQuery;
