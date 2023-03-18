import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getList } from '../shared/api/apis';
import type { ListResponseType } from '../shared/types/types';

const useGetListQuery = (category: string, sort: string, page: number) => {
  return useQuery<AxiosResponse<ListResponseType>, Error>(
    ['list', [category, sort, page]],
    () => getList(category, sort, page),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetListQuery;
