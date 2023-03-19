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

// 로그인 페이지
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
//아이디 찾기
export const getId = (u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-id', {
    params: { u_Name, u_Phone },
  });
//비밀번호 찾기 1차
export const getPwd = (u_Id: string, u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-password', {
    params: { u_Id, u_Name, u_Phone },
  });
//비밀번호 찾기 2차
export const putNewPwd = (u_Idx: number, u_Pw: string) => {
  axiosInstance.put('/users/reset-password', { u_Idx, u_Pw });
};

//마이페이지
export const getOrder = (query: number) =>
  axiosInstance.get(`/orders?page=${query}&maxpost=10`);
export const getCancel = (query: number) =>
  axiosInstance.get(`/cancel-list?page=${query}&maxpost=10`);
