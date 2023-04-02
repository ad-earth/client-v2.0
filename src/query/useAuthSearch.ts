import type { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getPwd, putNewPwd } from '../shared/api/userApi';
import type { IPwdSearchResponse, TError } from '../shared/types/types';

export interface ISearchPwdData {
  u_Id: string;
  u_Name: string;
  u_Phone: string;
}
export interface INewPwdData {
  u_Idx: number;
  u_Pw: string;
}

const useAuthSearch = (pwdData?: ISearchPwdData) => {
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

  const updatePwd = useMutation<AxiosResponse, AxiosError<TError>, INewPwdData>(
    data => putNewPwd(data.u_Idx, data.u_Pw),
    {
      onSuccess: () => {
        toast.success('비밀번호 변경에 성공하였습니다.');
        window.location.reload();
      },
    }
  );

  return {
    searchPwd,
    updatePwd,
  };
};

export default useAuthSearch;
