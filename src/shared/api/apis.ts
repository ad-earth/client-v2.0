import axiosInstance from './instance';

// 메인 페이지
// 상품 조회
export const getMain = () => axiosInstance.get('/main');
