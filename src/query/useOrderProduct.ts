import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import queryKeys from '../constants/queryKeys';
import { getOrderDetail, putCancel } from '../shared/api/productApi';
import type { IMyAPIResOrderDetail } from '../shared/types/types';

type TCancel = {
  p_No: number[];
};

export default function useOrderProduct() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { data: detailQuery, isLoading } = useQuery<
    AxiosResponse<IMyAPIResOrderDetail>,
    AxiosError
  >([queryKeys.ORDERPRODUCT, id], () => getOrderDetail(id), {
    enabled: !!id,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });

  const { date, no, price, address, userInfo, productData, cancelPrice } =
    useMemo(
      () => ({
        date: detailQuery?.data.o_Date,
        no: detailQuery?.data.o_No,
        price: detailQuery?.data.o_Price,
        address: detailQuery?.data.address,
        userInfo: detailQuery?.data.userInfo,
        productData: detailQuery?.data.products || [],
        cancelPrice: detailQuery?.data.products
          .map(el => el.o_Status === '취소완료' && el.p_Price)
          .reduce((prev, curr) => prev + curr, 0),
      }),
      [detailQuery]
    );

  const cancelProduct = useMutation<AxiosResponse, AxiosError, TCancel>(
    ({ p_No }) => putCancel(id, p_No),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.ORDER);
        alert('주문을 취소하였습니다.');
        navigate('/mypage');
      },
    }
  );

  return {
    isLoading,
    date,
    no,
    price,
    address,
    userInfo,
    productId: id,
    productData,
    cancelPrice,
    cancelProduct,
  };
}
