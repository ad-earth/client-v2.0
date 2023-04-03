import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { useLocation } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import {
  getAdList,
  getList,
  getWish,
  postLike,
} from '../shared/api/productApi';
import type {
  IAdResponse,
  IListResponse,
  TError,
  TResWish,
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
  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split('/');

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

  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    any,
    unknown
  >(productNumber => postLike(productNumber), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.LIST);
      queryClient.invalidateQueries(queryKeys.WISH);
      queryClient.invalidateQueries(queryKeys.DETAIL);
    },
  });

  const wishQuery = useInfiniteQuery(
    queryKeys.WISH,
    ({ pageParam = 1 }) => getWish(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = Math.ceil(lastPage.data.cnt / 12);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      enabled: path === queryKeys.WISH,
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      select: data => ({
        pages:
          [...data.pages]
            .map((list: AxiosResponse<TResWish>) => list?.data?.wishList)
            .flat() || null,
        pageParams: [...data.pageParams],
      }),
    }
  );

  const { wishCnt, wishData, wishLike } = useMemo(
    () => ({
      wishCnt: wishQuery?.data?.pages.length || 0,
      wishData: wishQuery?.data?.pages || [],
      wishLike: wishQuery?.data?.pages.map(list => list.p_No) || [],
    }),
    [wishQuery]
  );

  return {
    totalPages,
    products,
    likeList,
    pageCnt,
    productList,
    adProducts,
    likeProducts,
    mutate,
    wishQuery,
    wishCnt,
    wishData,
    wishLike,
  };
};
export default useProduct;
