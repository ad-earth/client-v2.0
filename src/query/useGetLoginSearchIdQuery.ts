import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getId } from '../shared/api/apis';
import type { TError } from '../shared/types/types';

export type SearchIdType = {
  u_Name: string;
  u_Phone: string;
};

type IdResponseType = {
  u_Id: string;
};

const useGetLoginSearchIdQuery = (data: SearchIdType) => {
  return useQuery<AxiosResponse<IdResponseType>, AxiosError<TError>>(
    'findId',
    () => getId(data.u_Name, data.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );
};

export default useGetLoginSearchIdQuery;
