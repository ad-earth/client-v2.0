import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { getComplete } from '../shared/api/apis';
import type { ICompleteResponse } from '../shared/types/types';

const useGetCompleteQuery = () => {
  return useQuery<AxiosResponse<ICompleteResponse>, Error>(
    'complete',
    () => getComplete(),
    {
      refetchOnWindowFocus: false,
    }
  );
};
export default useGetCompleteQuery;
