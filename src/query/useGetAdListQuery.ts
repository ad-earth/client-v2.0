import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getAdList } from '../shared/api/apis';
import type { AdResponseType } from '../shared/types/types';

const useGetAdListQuery = (keyword: string, page: number) => {
  return useQuery<AxiosResponse<AdResponseType>, Error>(
    ['ad', [keyword, page]],
    () => getAdList(keyword, page)
  );
};
export default useGetAdListQuery;
