import { useMutation } from 'react-query';
import type { LoginType } from '../pages/LogInPage';
import { postLogin } from '../shared/api/apis';

const PostLogin = async (data: LoginType) => {
  const res = await postLogin(data.u_Id, data.u_Pw);
  return res.data;
};

const usePostLoginQuery = (data: LoginType) => {
  return useMutation(() => PostLogin(data), {
    onSuccess: result => {
      if (result.userInfo) {
        localStorage.setItem('token', result.userInfo.token);
        localStorage.setItem('userInfo', JSON.stringify(result.userInfo));
        localStorage.setItem('cartStatus', JSON.stringify(result.cartStatus));
      }
    },
  });
};

export default usePostLoginQuery;
