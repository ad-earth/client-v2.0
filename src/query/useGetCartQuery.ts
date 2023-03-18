import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getCart } from './../shared/api/apis';
import type { ICartResponse } from './../shared/types/types';

const useGetCartQuery = () => {
  return useQuery<AxiosResponse<ICartResponse>, Error>('main', () => getCart());
};
export default useGetCartQuery;