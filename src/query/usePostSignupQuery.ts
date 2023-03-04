import { AxiosError, AxiosResponse } from 'axios';
import { postSignup } from '../shared/api/apis';
import { useMutation } from 'react-query';

export interface SignUpDataType {
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

type ErrType = {
  errorMessage: string;
};

const PostSignup = async (data: SignUpDataType) => {
  const res = await postSignup(
    data.u_Id,
    data.u_Pw,
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

const usePostSignupQuery = (data: SignUpDataType) => {
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    () => PostSignup(data),
    {}
  );
};

export default usePostSignupQuery;
