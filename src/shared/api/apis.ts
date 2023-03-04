import axiosInstance from './instance';

// 메인 페이지
// 상품 조회
export const getMain = () => axiosInstance.get('/main');

//로그인페이지
export const postLogin = (u_Id: string, u_Pw: string) =>
  axiosInstance.post('/users/login', { u_Id, u_Pw });
//회원가입페이지
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
