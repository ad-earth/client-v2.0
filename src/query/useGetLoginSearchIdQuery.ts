import { useQuery } from 'react-query';
import { ErrorType } from '../shared/types/types';
import { AxiosResponse, AxiosError } from 'axios';
import { getId } from '../shared/api/apis';

export type SearchIdType = {
  u_Name: string;
  u_Phone: string;
};

type IdResponseType = {
  u_Id: string;
};

const useGetLoginSearchIdQuery = (data: SearchIdType) => {
  return useQuery<AxiosResponse<IdResponseType>, AxiosError<ErrorType>>(
    'findId',
    () => getId(data.u_Name, data.u_Phone),
    {
      enabled: false,
      retry: 0,
    }
  );
};

export default useGetLoginSearchIdQuery;
