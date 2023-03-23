import { useMutation } from 'react-query';
import { postPayment } from '../shared/api/apis';
import type { IProductPayment } from './../shared/types/types';

export type TAddressInfo = {
  d_No: number;
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Memo: string;
};

type TData = {
  type: string;
  address: TAddressInfo;
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
