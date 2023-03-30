import axiosInstance from './instance';

// auth-signup
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
// auth-login
export const postLogin = (u_Id: string, u_Pw: string) =>
  axiosInstance.post('/users/login', { u_Id, u_Pw });
// auth-id
export const getId = (u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-id', {
    params: { u_Name, u_Phone },
  });
// auth-pwd
export const getPwd = (u_Id: string, u_Name: string, u_Phone: string) =>
  axiosInstance.get('/users/find-password', {
    params: { u_Id, u_Name, u_Phone },
  });
// auth-newPwd
export const putNewPwd = (u_Idx: number, u_Pw: string) =>
  axiosInstance.put('/users/reset-password', { u_Idx, u_Pw });

// user-info
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
// user-delete
export const deleteUser = () => axiosInstance.delete('/users');
