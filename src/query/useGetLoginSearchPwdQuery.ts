import { useQuery } from 'react-query';
import { ErrorType } from '../shared/types/types';
import { AxiosResponse, AxiosError } from 'axios';
import { getPwd } from './../shared/api/apis';

export type SearchPwdType = {
  u_Id: string;
  u_Name: string;
  u_Phone: string;
};

type PwdResponseType = {
  u_Idx: number;
};

export const useGetLoginSearchPwdQuery = (data: SearchPwdType) => {
  return useQuery<AxiosResponse<PwdResponseType>, AxiosError<ErrorType>>(
    'findPwd',
    () => getPwd(data.u_Id, data.u_Name, data.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );
};
