import { useMutation } from 'react-query';
import type { TPaymentInfo } from '../redux/reducer/payInputSlice';
import { postPayment } from '../shared/api/apis';
import type { IProductPayment } from './../shared/types/types';

type TData = {
  type: string;
  address: TPaymentInfo;
  products: IProductPayment[];
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

// const usePostPaymentQuery = () => {
//   return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
//     (data: TData) =>
//       postPayment(data.type, data.address, data.products, data.o_Price),
//     {}
//   );
// };

export default usePostPaymentQuery;
