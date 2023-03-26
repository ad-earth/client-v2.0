import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import type { IPwdSearchResponse, TError } from '../shared/types/types';
import { getPwd } from './../shared/api/apis';

export type TSearchPwd = {
  u_Id: string;
  u_Name: string;
  u_Phone: string;
};

export const useGetLoginSearchPwdQuery = (data: TSearchPwd) => {
  return useQuery<AxiosResponse<IPwdSearchResponse>, AxiosError<TError>>(
    'findPwd',
    () => getPwd(data.u_Id, data.u_Name, data.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );
};
