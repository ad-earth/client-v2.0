import type { AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import queryKeys from '../constants/queryKeys';
import { getComplete } from './../shared/api/paymentApi';
import type { ICompleteResponse } from './../shared/types/types';

const useComplete = () => {
  const { data: completeData } = useQuery<
    AxiosResponse<ICompleteResponse>,
    Error
  >([queryKeys.COMPLETE], () => getComplete());
  const { completeInfo } = useMemo(
    () => ({
      completeInfo: completeData?.data,
    }),
    [completeData]
  );

  return {
    completeInfo,
  };
};

export default useComplete;
