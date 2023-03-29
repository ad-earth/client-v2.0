import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getAdList, getList } from '../shared/api/productApi';
import type { IAdResponse, IListResponse } from '../shared/types/types';

type TParameter = {
  page: number;
  category?: string;
  sort?: string;
  keyword?: string;
};

const useProduct = ({ page, category, sort, keyword }: TParameter) => {
  const { data: listData } = useQuery<AxiosResponse<IListResponse>, Error>(
    [queryKeys.LIST, category, sort, page],
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

  const { data: adData } = useQuery<AxiosResponse<IAdResponse>, Error>(
    [queryKeys.AD, keyword, page],
    () => getAdList(keyword, page)
  );

  const { pageCnt, productList, adProducts, likeProducts } = useMemo(
    () => ({
      pageCnt: adData?.data.cnt,
      productList: adData?.data.products,
      adProducts: adData?.data.adProducts,
      likeProducts: adData?.data.userLike,
    }),
    [adData]
  );

  return {
    totalPages,
    products,
    likeList,
    pageCnt,
    productList,
    adProducts,
    likeProducts,
  };
};
export default useProduct;
