import axiosInstance from './instance';

// 메인 페이지
// 상품 조회
export const getMain = () => axiosInstance.get('/main');

//로그인페이지
export const postLogin = (u_Id: string, u_Pw: string) =>
  axiosInstance.post('/users/login', { u_Id, u_Pw });
