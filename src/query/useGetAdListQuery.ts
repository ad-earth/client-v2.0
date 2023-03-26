import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import type { IAdResponse } from '../shared/types/types';
import { getAdList } from './../shared/api/productApi';

const useGetAdListQuery = (keyword: string, page: number) => {
  return useQuery<AxiosResponse<IAdResponse>, Error>(
    ['ad', [keyword, page]],
    () => getAdList(keyword, page)
  );
};
export default useGetAdListQuery;
