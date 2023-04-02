import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { setCartStatus } from '../redux/reducer/cartSlice';
import type { TPaymentInfo } from '../redux/reducer/payInputSlice';
import { useAppDispatch } from '../redux/store';
import {
  deleteAddress,
  getPayment,
  postPayment,
} from './../shared/api/paymentApi';
import type {
  IPaymentResponse,
  IProductPayCart,
  TError,
} from './../shared/types/types';

interface IPayData {
  type: string;
  address: TPaymentInfo;
  products: IProductPayCart[];
  o_Price: number;
}

const usePayment = (type?: string, p_No?: number) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { data: payData } = useQuery<AxiosResponse<IPaymentResponse>, Error>(
    [queryKeys.PAYMENT, type, p_No],
    () => getPayment(type, p_No),
    { enabled: !!type, refetchOnWindowFocus: false }
  );
  const { userInfo, addressList, products, price } = useMemo(
    () => ({
      userInfo: payData?.data.userInfo,
      addressList: payData?.data.addressList,
      products: payData?.data.products,
      price: payData?.data.o_Price,
    }),
    [payData]
  );

  const postPay = useMutation<AxiosResponse, AxiosError<TError>, IPayData>(
    data => postPayment(data.type, data.address, data.products, data.o_Price),
    {
      onSuccess: res => {
        toast.success('상품 구매에 성공하였습니다 😊');
        const typeName = res.config.url.split('/')[2];
        const result = JSON.parse(res.config.data);
        if (typeName === 'c') {
          const cartStatus = localStorage.getItem('cartStatus');
          const cur = Number(cartStatus) - result.products.length;
          if (cur >= 0) {
            localStorage.setItem('cartStatus', String(cur));
            navigate('/complete', {
              state: { price: `${result.o_Price}` },
            });
            dispatch(setCartStatus(cur));
          } else {
            dispatch(setCartStatus(0));
            navigate('/complete', {
              state: { price: `${result.o_Price}` },
            });
          }
        } else {
          navigate('/complete', {
            state: { price: `${result.o_Price}` },
          });
        }
      },
    }
  );

  const deletePayAddress = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    any,
    unknown
  >((d_No: number) => deleteAddress(d_No), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.PAYMENT]);
      toast.success('이전 배송지 정보를 삭제하였습니다.');
    },
  });

  return {
    userInfo,
    addressList,
    products,
    price,
    postPay,
    deletePayAddress,
  };
};

export default usePayment;
