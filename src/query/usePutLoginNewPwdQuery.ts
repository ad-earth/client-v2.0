import { useMutation } from 'react-query';
import { putNewPwd } from '../shared/api/apis';

export type NewPwdType = {
  u_Idx: number;
  u_Pw: string;
};

const PutLoginNewPwd = async (data: NewPwdType) => {
  const res = await putNewPwd(data.u_Idx, data.u_Pw);
  return res;
};

const usePutLoginNewPwdQuery = (data: NewPwdType) => {
  return useMutation(() => PutLoginNewPwd(data), {
    onSuccess: () => {
      alert('비밀번호 변경에 성공하였습니다.');
      window.location.reload();
    },
  });
};

export default usePutLoginNewPwdQuery;
