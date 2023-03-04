import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ListResponseType } from '../shared/types/types';
import { getList } from '../shared/api/apis';

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
