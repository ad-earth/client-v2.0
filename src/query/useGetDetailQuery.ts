import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { DetailResponseType } from '../shared/types/types';
import { getDetail } from '../shared/api/apis';

const useGetDetailQuery = (productNo: number, keyword?: string) => {
  return useQuery<AxiosResponse<DetailResponseType>, Error>(
    'detail',
    () => getDetail(productNo, keyword),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetDetailQuery;
