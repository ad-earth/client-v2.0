import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { deleteCart, getCart, putCart } from './../shared/api/paymentApi';
import type { ICartResponse, TError } from './../shared/types/types';
interface IUpdateData {
  type: string;
  productNo: number;
  option: (string | number)[][];
  key?: number;
}
interface IRemoveData {
  type: string;
  p_Nos: string;
}

const useGetCartQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
    IUpdateData
  >(data => putCart(data.type, data.productNo, data.option, data.key), {
    onSuccess: res => {
      queryClient.invalidateQueries([queryKeys.CART]);
      const type = res.config.url.split('/')[2];
      const result = JSON.parse(res.config.data);
      if (type === 'd')
        navigate('/payment', {
          state: { type: type, productNo: result.p_No },
        });
    },
  });

  const removeCartItem = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    IRemoveData
  >(data => deleteCart(data.type, data.p_Nos), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.CART]);
      toast.success('상품을 삭제하였습니다.');
    },
  });

  return { cartList, updateCartItem, removeCartItem };
};

export default useGetCartQuery;
