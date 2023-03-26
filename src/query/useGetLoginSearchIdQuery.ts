import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getId } from '../shared/api/apis';
import type { IIdSearchResponse, TError } from '../shared/types/types';

export type TSearchId = {
  u_Name: string;
  u_Phone: string;
};

const useGetLoginSearchIdQuery = (data: TSearchId) => {
  return useQuery<AxiosResponse<IIdSearchResponse>, AxiosError<TError>>(
    'findId',
    () => getId(data.u_Name, data.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );
};

export default useGetLoginSearchIdQuery;
