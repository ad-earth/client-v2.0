import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import queryKeys from '../constants/queryKeys';
import {
  getAdList,
  getDetail,
  getList,
  postLike,
} from '../shared/api/productApi';
import type {
  IAdResponse,
  IDetailResponse,
  IListResponse,
  TError,
} from '../shared/types/types';

type TParameter = {
  page?: number;
  category?: string;
  sort?: string;
  keyword?: string;
  productNo?: number;
};

const useProduct = ({
  page,
  category,
  sort,
  keyword,
  productNo,
}: TParameter) => {
  const { data: listData } = useQuery<AxiosResponse<IListResponse>, Error>(
    [queryKeys.LIST, category, sort, page],
    () => getList(category, sort, page),
    {
      refetchOnWindowFocus: false,
      enabled: !!category,
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
    () => getAdList(keyword, page),
    {
      enabled: !!keyword,
    }
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

  const { data: detailData } = useQuery<AxiosResponse<IDetailResponse>, Error>(
    queryKeys.DETAIL,
    () => getDetail(productNo, keyword),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { product, keyNo, isLike } = useMemo(
    () => ({
      product: detailData?.data.product,
      keyNo: detailData?.data.k_No,
      isLike: detailData?.data.userLike,
    }),
    [detailData]
  );

  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    any,
    unknown
  >(productNumber => postLike(productNumber), {
    onSuccess: () => {
      queryClient.invalidateQueries(['ad']);
      queryClient.invalidateQueries(['wish']);
      queryClient.invalidateQueries(['detail']);
    },
  });

  return {
    totalPages,
    products,
    likeList,
    pageCnt,
    productList,
    adProducts,
    likeProducts,
    product,
    keyNo,
    isLike,
    mutate,
  };
};
export default useProduct;
