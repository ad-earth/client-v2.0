import type { TPaymentInfo } from '../../redux/reducer/payInputSlice';
import type { IProductPayCart } from '../types/types';
import axiosInstance from './instance';

// 공통
// 좋아요
export const postLike = (productNo: number) =>
  axiosInstance.post(`/wish-list/${productNo}`);

// 메인 페이지
// 상품 조회
export const getMain = () => axiosInstance.get('/main');

// 리스트 페이지
// 상품 목록 조회
export const getList = (category: string, sort: string, page: number) =>
  axiosInstance.get(
    `/main/products/${category}?sort=${sort}&page=${page}&maxpost=20`
  );

// 검색 페이지
// 검색 목록 조회
export const getAdList = (keyword: string, page: number) =>
  axiosInstance.get(`/main/search?keyword=${keyword}&page=${page}&maxpost=20`);

// 상세 페이지
// 상세 정보 조회
export const getDetail = (productNo: number, keyword?: string) =>
  axiosInstance.get(`/products/${productNo}?keyword=${keyword}`);
// 구매평 조회
export const getReviews = (productNo: number, page: number) =>
  axiosInstance.get(`/reviews/${productNo}?page=${page}&maxpost=10`);
// 구매평 삭제
export const deleteReview = (reviewNo: number) =>
  axiosInstance.delete(`/reviews/${reviewNo}`);
// 구매하기 & 장바구니
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

// 로그인 페이지
export const postLogin = (u_Id: string, u_Pw: string) =>
  axiosInstance.post('/users/login', { u_Id, u_Pw });
// 회원가입 페이지
export const postSignup = (
  u_Id: string,
  u_Pw: string,
  u_Name: string,
  u_Address1: string,
  u_Address2: string,
  u_Address3: string,
  u_Gender: string,
  u_Phone: string,
  u_Img: string
) =>
  axiosInstance.post('/users/register', {
    u_Id,
    u_Pw,
    u_Name,
    u_Address1,
    u_Address2,
    u_Address3,
    u_Gender,
    u_Phone,
    u_Img,
  });
// 유저 정보 수정
export const putUserInfoChange = (
  u_Name: string,
  u_Address1: string,
  u_Address2: string,
  u_Address3: string,
  u_Gender: string,
  u_Phone: string,
  u_Img: string
) =>
  axiosInstance.put('/users', {
    u_Name,
    u_Address1,
    u_Address2,
    u_Address3,
    u_Gender,
    u_Phone,
    u_Img,
  });
// 아이디 찾기
export const getId = (u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-id', {
    params: { u_Name, u_Phone },
  });
// 비밀번호 찾기 1차
export const getPwd = (u_Id: string, u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-password', {
    params: { u_Id, u_Name, u_Phone },
  });
// 비밀번호 찾기 2차
export const putNewPwd = (u_Idx: number, u_Pw: string) => {
  axiosInstance.put('/users/reset-password', { u_Idx, u_Pw });
};

// 장바구니 조회
export const getCart = () => axiosInstance.get('/carts');
// 장바구니 삭제
export const deleteCart = (type: string, p_Nos: string) =>
  axiosInstance.delete(`/carts/${type}?p_No=${p_Nos}`);

// 결제정보 조회
export const getPayment = (type: string, p_No: number) =>
  axiosInstance.get(`/payment/${type}?p_No=${p_No}`);
// 결제페이지 주문하기
export const postPayment = (
  type: string,
  address: TPaymentInfo,
  products: IProductPayCart[],
  o_Price: number
) => {
  axiosInstance.post(`/payment/${type}`, {
    address,
    products,
    o_Price,
  });
};
// 결제페이지 주소 삭제
export const deleteAddress = (d_No: number) =>
  axiosInstance.delete(`/shipping-list/${d_No}`);

// 주문완료 조회
export const getComplete = () => axiosInstance.get('/payment/complete');

//마이페이지
export const getOrder = (query: number) =>
  axiosInstance.get(`/orders?page=${query}&maxpost=10`);
export const getCancel = (query: number) =>
  axiosInstance.get(`/cancel-list?page=${query}&maxpost=10`);
export const getOrderDetail = (id: string) =>
  axiosInstance.get(`/orders/${id}`);
export const getWish = (page: number) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=12`);
export const deleteUser = () => axiosInstance.delete('/users');
export const putCancel = (id: string, p_No: number[]) =>
  axiosInstance.put(`/orders/${id}/cancel`, { p_No });
export const postReviews = (id: number, r_Content: string, r_Score: number) =>
  axiosInstance.post(`/reviews/${id}`, { r_Content, r_Score });
