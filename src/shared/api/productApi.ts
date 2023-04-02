import axiosInstance from './instance';

// main
export const getMain = () => axiosInstance.get('/main');

// detail
export const getDetail = (productNo: number, keyword?: string) =>
  axiosInstance.get(`/products/${productNo}?keyword=${keyword}`);

// list
export const getList = (category: string, sort: string, page: number) =>
  axiosInstance.get(
    `/main/products/${category}?sort=${sort}&page=${page}&maxpost=20`
  );
// list-wish
export const getWish = (page: number) =>
  axiosInstance.get(`/wish-list?page=${page}&maxpost=12`);
// list-like
export const postLike = (productNo: number) =>
  axiosInstance.post(`/wish-list/${productNo}`);
// list-ad
export const getAdList = (keyword: string, page: number) =>
  axiosInstance.get(`/main/search?keyword=${keyword}&page=${page}&maxpost=20`);

// order
export const getOrder = (query: number) =>
  axiosInstance.get(`/orders?page=${query}&maxpost=10`);
// order-cancel
export const getCancel = (query: number) =>
  axiosInstance.get(`/cancel-list?page=${query}&maxpost=10`);
// order-detail
export const getOrderDetail = (id: string) =>
  axiosInstance.get(`/orders/${id}`);
// order-cancel
export const putCancel = (id: string, p_No: number[]) =>
  axiosInstance.put(`/orders/${id}/cancel`, { p_No });

// review
export const getReviews = (productNo: number, page: number) =>
  axiosInstance.get(`/reviews/${productNo}?page=${page}&maxpost=10`);
// review-post
export const postReviews = (id: number, r_Content: string, r_Score: number) =>
  axiosInstance.post(`/reviews/${id}`, { r_Content, r_Score });
// review-delete
export const deleteReview = (reviewNo: number) =>
  axiosInstance.delete(`/reviews/${reviewNo}`);
