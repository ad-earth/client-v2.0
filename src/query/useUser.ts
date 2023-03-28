import type { AxiosError, AxiosResponse } from 'axios';
import type { UseMutationResult } from 'react-query';
import { useMutation } from 'react-query';
import { putUserInfoChange } from './../shared/api/userApi';
import type { TError } from './../shared/types/types';

export interface TUserInfoData {
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

export default function useUser() {
  const putUserInfo: UseMutationResult<
    AxiosResponse,
    AxiosError<TError>,
    TUserInfoData
  > = useMutation<AxiosResponse, AxiosError<TError>, TUserInfoData>(
    ({
      u_Name,
      u_Address1,
      u_Address2,
      u_Address3,
      u_Gender,
      u_Img,
      u_Phone,
    }) =>
      putUserInfoChange(
        u_Name,
        u_Address1,
        u_Address2,
        u_Address3,
        u_Gender,
        u_Phone,
        u_Img
      )
  );
  return { putUserInfo };
}
