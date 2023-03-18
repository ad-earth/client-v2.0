import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getMain } from '../shared/api/apis';
import type { TMainResponse } from '../shared/types/types';

const useGetMainQuery = () => {
  return useQuery<AxiosResponse<TMainResponse>, Error>('main', () => getMain());
};
export default useGetMainQuery;
