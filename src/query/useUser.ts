import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteUser, putUserInfoChange } from './../shared/api/userApi';
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
  const navigate = useNavigate();

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

  const removeUser = useMutation<AxiosResponse, AxiosError>(deleteUser, {
    onSuccess: () => {
      alert('탈퇴 성공!');
      localStorage.clear();
      navigate('/');
    },
  });
  return { putUserInfo, removeUser };
};

export default useUser;
