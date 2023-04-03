import type { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { deleteCart, putCart } from './../shared/api/paymentApi';
import type { TError } from './../shared/types/types';
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

const useCart = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  return { updateCartItem, removeCartItem };
};

export default useCart;
