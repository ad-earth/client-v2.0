import type { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import type {
  IIdSearchResponse,
  ILoginResponse,
  TError,
} from '../shared/types/types';
import { getId, postLogin, postSignup } from './../shared/api/userApi';

export interface ISearchIdData {
  u_Name: string;
  u_Phone: string;
}
export interface ILoginData {
  u_Id: string;
  u_Pw: string;
}
export interface ISignUpData extends ILoginData {
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const useAuth = (idData?: ISearchIdData) => {
  const navigate = useNavigate();

  const searchId = useQuery<
    AxiosResponse<IIdSearchResponse>,
    AxiosError<TError>
  >([queryKeys.FINDID, idData], () => getId(idData.u_Name, idData.u_Phone), {
    enabled: false,
    retry: 0,
  });

  const login = useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<TError>,
    ILoginData
  >(data => postLogin(data.u_Id, data.u_Pw), {
    onSuccess: res => {
      window.location.replace('/');
      localStorage.setItem('token', res.data.userInfo.token);
      localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
      localStorage.setItem('cartStatus', JSON.stringify(res.data.cartStatus));
    },
    onError: () => {
      toast.error('아이디 또는 비밀번호를 잘못 입력했습니다.');
    },
  });

  const signup = useMutation<AxiosResponse, AxiosError<TError>, ISignUpData>(
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
      ),
    {
      onSuccess: res => {
        const result = JSON.parse(res.config.data);
        toast.success(
          `${result.u_Name}님 환영합니다. 지구샵은 로그인 후 이용해주세요!`
        );
        navigate('/login');
      },
    }
  );

  return {
    searchId,
    login,
    signup,
  };
};

export default useAuth;
