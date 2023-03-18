import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getDetail } from '../shared/api/apis';
import type { IDetailResponse } from '../shared/types/types';

const useGetDetailQuery = (productNo: number, keyword?: string) => {
  return useQuery<AxiosResponse<IDetailResponse>, Error>(
    'detail',
    () => getDetail(productNo, keyword),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetDetailQuery;
