import { useMutation } from 'react-query';
import type { TPaymentInfo } from '../redux/reducer/payInputSlice';
import { postPayment } from '../shared/api/apis';
import type { IProductPayCart } from './../shared/types/types';

type TData = {
  type: string;
  address: TPaymentInfo;
  products: IProductPayCart[];
  o_Price: number;
};

const PostPayment = async (data: TData) => {
  const res = await postPayment(
    data.type,
    data.address,
    data.products,
    data.o_Price
  );
  return res;
};

const usePostPaymentQuery = () => {
  return useMutation((data: TData) => PostPayment(data), {});
};

export default usePostPaymentQuery;
