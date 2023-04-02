import type { TPaymentInfo } from '../../redux/reducer/payInputSlice';
import type { IProductPayCart } from '../types/types';
import axiosInstance from './instance';

// cart
export const getCart = () => axiosInstance.get('/carts');
// cart-put
export const putCart = (
  type: string,
  p_No: number,
  p_Option: (string | number)[][],
  k_No?: number
) =>
  axiosInstance.put(`/carts/${type}`, {
    k_No,
    p_No,
    p_Option,
  });
// cart-delete
export const deleteCart = (type: string, p_Nos: string) =>
  axiosInstance.delete(`/carts/${type}?p_No=${p_Nos}`);

// payment
export const getPayment = (type: string, p_No: number) =>
  axiosInstance.get(`/payment/${type}?p_No=${p_No}`);
// payment-post
export const postPayment = (
  type: string,
  address: TPaymentInfo,
  products: IProductPayCart[],
  o_Price: number
) =>
  axiosInstance.post(`/payment/${type}`, {
    address,
    products,
    o_Price,
  });

// payment-delete
export const deleteAddress = (d_No: number) =>
  axiosInstance.delete(`/shipping-list/${d_No}`);
//payment-complete
export const getComplete = () => axiosInstance.get('/payment/complete');
