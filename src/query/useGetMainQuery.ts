import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getMain } from '../shared/api/apis';
import type { MainResponseType } from '../shared/types/types';

const useGetMainQuery = () => {
  return useQuery<AxiosResponse<MainResponseType>, Error>('main', () =>
    getMain()
  );
};
export default useGetMainQuery;
