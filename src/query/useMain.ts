import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getMain } from '../shared/api/productApi';
import type { TMainResponse } from '../shared/types/types';

const useMain = () => {
  const { data } = useQuery<AxiosResponse<TMainResponse>, Error>(
    queryKeys.MAIN,
    getMain
  );

  const { bestList, newList } = useMemo(
    () => ({
      bestList: data?.data.Best,
      newList: data?.data.New,
    }),
    [data]
  );

  return { bestList, newList };
};

export default useMain;
