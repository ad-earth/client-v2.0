import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { postSignup } from '../shared/api/apis';
import type { TError } from './../shared/types/types';

export interface TSignUpData {
  u_Id: string;
  u_Pw: string;
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const usePostSignupQuery = (data: TSignUpData) => {
  return useMutation<AxiosResponse, AxiosError<TError>, any, unknown>(() =>
    postSignup(
      data.u_Id,
      data.u_Pw,
      data.u_Name,
      data.u_Address1,
      data.u_Address2,
      data.u_Address3,
      data.u_Gender,
      data.u_Phone,
      data.u_Img
    )
  );
};

export default usePostSignupQuery;
