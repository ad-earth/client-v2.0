import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { putCancel } from './../shared/api/productApi';

type TCancel = {
  id: string;
  p_No: number[];
};

export default function usePutCancelQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const putProduct = useMutation<AxiosResponse, AxiosError, TCancel>(
    ({ id, p_No }) => putCancel(id, p_No),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('order');
        alert('주문을 취소하였습니다.');
        navigate('/mypage');
      },
    }
  );
  return putProduct;
}
