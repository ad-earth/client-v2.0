import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAddress } from '../shared/api/paymentApi';

import type { TError } from './../shared/types/types';

const useDeletePaymentAddressQuery = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(
    (d_No: number) => deleteAddress(d_No),
    {
      onSuccess: () => queryClient.invalidateQueries(['payment']),
    }
  );
};

export default useDeletePaymentAddressQuery;
