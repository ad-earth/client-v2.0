import type { AxiosError, AxiosResponse } from 'axios';
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

const useUser = () => {
  const putUserInfo = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    TUserInfoData
  >(data =>
    putUserInfoChange(
      data.u_Name,
      data.u_Address1,
      data.u_Address2,
      data.u_Address3,
      data.u_Gender,
      data.u_Phone,
      data.u_Img
    )
  );
  return { putUserInfo };
};

export default useUser;
