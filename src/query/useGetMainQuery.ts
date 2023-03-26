import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import type { TMainResponse } from '../shared/types/types';
import { getMain } from './../shared/api/productApi';

const useGetMainQuery = () => {
  return useQuery<AxiosResponse<TMainResponse>, Error>('main', () => getMain());
};
export default useGetMainQuery;
