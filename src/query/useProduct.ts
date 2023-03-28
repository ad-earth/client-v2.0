import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getList } from '../shared/api/productApi';
import type { IListResponse } from '../shared/types/types';

const useProduct = (category: string, sort: string, page: number) => {
  const { data: listData } = useQuery<AxiosResponse<IListResponse>, Error>(
    [queryKeys.LIST, [category, sort, page]],
    () => getList(category, sort, page),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { totalPages, products, likeList } = useMemo(
    () => ({
      totalPages: listData?.data.cnt,
      products: listData?.data.products,
      likeList: listData?.data.userLike,
    }),
    [listData]
  );

  return { totalPages, products, likeList };
};
export default useProduct;
