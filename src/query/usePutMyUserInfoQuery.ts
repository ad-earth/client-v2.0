import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { putUserInfoChange } from '../shared/api/apis';
import type { ErrorType } from './../shared/types/types';

export interface UserInfoDataType {
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const PutUserInfoChange = async (data: UserInfoDataType) => {
  const res = await putUserInfoChange(
    data.u_Name,
    data.u_Address1,
    data.u_Address2,
    data.u_Address3,
    data.u_Gender,
    data.u_Phone,
    data.u_Img
  );
  return res.data;
};

const usePutUserInfoQuery = (data: UserInfoDataType) => {
  return useMutation<AxiosResponse, AxiosError<ErrorType>, any, unknown>(
    () => PutUserInfoChange(data),
    {}
  );
};

export default usePutUserInfoQuery;
