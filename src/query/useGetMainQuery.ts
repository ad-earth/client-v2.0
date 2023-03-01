import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { MainResponseType } from '../shared/types/types';
import { getMain } from '../shared/api/apis';

const useGetMainQuery = () => {
  return useQuery<AxiosResponse<MainResponseType>, Error>('main', () =>
    getMain()
  );
};
export default useGetMainQuery;
