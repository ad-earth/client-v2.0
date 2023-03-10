import { postLogin } from '../shared/api/apis';
import { useMutation } from 'react-query';
import { LoginType } from '../pages/LogInPage';

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
      }
      // if (data.cartList) {
      //   console.log('data.cartList: ', data.cartList);
      //   return data.cartList;
      // }
    },
  });
};

export default usePostLoginQuery;
