import type { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import type {
  IIdSearchResponse,
  ILoginResponse,
  IPwdSearchResponse,
  TError,
} from '../shared/types/types';
import {
  getId,
  getPwd,
  postLogin,
  postSignup,
  putNewPwd,
} from './../shared/api/userApi';

export interface ISearchIdData {
  u_Name: string;
  u_Phone: string;
}
export interface TSearchPwdData extends ISearchIdData {
  u_Id: string;
}
export interface TNewPwdData {
  u_Idx: number;
  u_Pw: string;
}
export interface TLoginData {
  u_Id: string;
  u_Pw: string;
}
export interface TSignUpData extends TLoginData {
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const useAuth = (idData?: ISearchIdData, pwdData?: TSearchPwdData) => {
  const searchId = useQuery<
    AxiosResponse<IIdSearchResponse>,
    AxiosError<TError>
  >([queryKeys.FINDID, idData], () => getId(idData.u_Name, idData.u_Phone), {
    enabled: false,
    retry: 0,
  });

  const searchPwd = useQuery<
    AxiosResponse<IPwdSearchResponse>,
    AxiosError<TError>
  >(
    [queryKeys.FINDPWD, pwdData],
    () => getPwd(pwdData.u_Id, pwdData.u_Name, pwdData.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );

  const updatePwd = useMutation<AxiosResponse, AxiosError<TError>, TNewPwdData>(
    data => putNewPwd(data.u_Idx, data.u_Pw),
    {
      onSuccess: () => {
        toast.success('비밀번호 변경에 성공하였습니다.');
        window.location.reload();
      },
    }
  );

  const login = useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<TError>,
    TLoginData
  >(data => postLogin(data.u_Id, data.u_Pw), {
    onSuccess: res => {
      if (res.data.userInfo) {
        localStorage.setItem('token', res.data.userInfo.token);
        localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
        localStorage.setItem('cartStatus', JSON.stringify(res.data.cartStatus));
      }
    },
    onError: () => {
      toast.error('아이디 또는 비밀번호를 잘못 입력했습니다.');
    },
  });

  const signup = useMutation<AxiosResponse, AxiosError<TError>, TSignUpData>(
    data =>
      postSignup(
        data.u_Id,
        data.u_Pw,
        data.u_Name,
        data.u_Address1,
        data.u_Address2,
        data.u_Address3,
        data.u_Gender,
        data.u_Phone,
        data.u_Img
      )
  );

  return {
    searchId,
    searchPwd,
    updatePwd,
    login,
    signup,
  };
};

export default useAuth;
