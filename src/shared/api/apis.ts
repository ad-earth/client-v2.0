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
