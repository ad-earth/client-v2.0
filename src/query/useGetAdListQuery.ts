import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { AdResponseType } from '../shared/types/types';
import { getAdList } from '../shared/api/apis';

const useGetAdListQuery = (keyword: string, page: number) => {
  return useQuery<AxiosResponse<AdResponseType>, Error>(
    ['ad', [keyword, page]],
    () => getAdList(keyword, page)
  );
};
export default useGetAdListQuery;
