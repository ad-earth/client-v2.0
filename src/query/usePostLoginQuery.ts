import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import type { LoginType } from '../pages/LogInPage';
import { postLogin } from './../shared/api/userApi';
import type { ILoginResponse, TError } from './../shared/types/types';

const usePostLoginQuery = () => {
  return useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<TError>,
    any,
    unknown
  >((data: LoginType) => postLogin(data.u_Id, data.u_Pw), {
    onSuccess: (res: AxiosResponse<ILoginResponse>) => {
      if (res.data.userInfo) {
        localStorage.setItem('token', res.data.userInfo.token);
        localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
        localStorage.setItem('cartStatus', JSON.stringify(res.data.cartStatus));
      }
    },
  });
};

export default usePostLoginQuery;
