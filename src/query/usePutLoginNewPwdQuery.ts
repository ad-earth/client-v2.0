import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { putNewPwd } from './../shared/api/userApi';

export type TNewPwd = {
  u_Idx: number;
  u_Pw: string;
};

const PutLoginNewPwd = async (data: TNewPwd) => {
  const res = await putNewPwd(data.u_Idx, data.u_Pw);
  return res;
};

const usePutLoginNewPwdQuery = (data: TNewPwd) => {
  return useMutation(() => PutLoginNewPwd(data), {
    onSuccess: () => {
      toast.success('비밀번호 변경에 성공하였습니다.');
      window.location.reload();
    },
  });
};

export default usePutLoginNewPwdQuery;
