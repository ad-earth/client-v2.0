import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getDetail } from '../shared/api/productApi';
import type { IDetailResponse } from '../shared/types/types';

const useDetail = (productNo: number, keyword: string) => {
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

  return {
    product,
    keyNo,
    isLike,
  };
};

export default useDetail;
