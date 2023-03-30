import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import queryKeys from '../constants/queryKeys';
import type { TPaymentInfo } from '../redux/reducer/payInputSlice';
import {
  deleteAddress,
  getComplete,
  getPayment,
  postPayment,
} from './../shared/api/paymentApi';
import type {
  ICompleteResponse,
  IPaymentResponse,
  IProductPayCart,
  TError,
} from './../shared/types/types';

type TPayData = {
  type: string;
  address: TPaymentInfo;
  products: IProductPayCart[];
  o_Price: number;
};

const usePayment = (type?: string, p_No?: number) => {
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

  const { data: completeData } = useQuery<
    AxiosResponse<ICompleteResponse>,
    Error
  >([queryKeys.COMPLETE], () => getComplete());
  const { completeInfo } = useMemo(
    () => ({
      completeInfo: completeData?.data,
    }),
    [completeData]
  );

  const postPay = useMutation<AxiosResponse, AxiosError<TError>, TPayData>(
    data => postPayment(data.type, data.address, data.products, data.o_Price)
  );

  const deletePayAddress = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    any,
    unknown
  >((d_No: number) => deleteAddress(d_No), {
    onSuccess: () => queryClient.invalidateQueries([queryKeys.PAYMENT]),
  });

  return {
    userInfo,
    addressList,
    products,
    price,
    completeInfo,
    postPay,
    deletePayAddress,
  };
};

export default usePayment;
