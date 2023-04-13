import type { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../redux/reducer/authSlice';
import { useAppDispatch } from './../redux/store';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const putUserInfo = useMutation<
    AxiosResponse,
    AxiosError<TError>,
    TUserInfoData
  >(
    data =>
      putUserInfoChange(
        data.u_Name,
        data.u_Address1,
        data.u_Address2,
        data.u_Address3,
        data.u_Gender,
        data.u_Phone,
        data.u_Img
      ),
    {
      onSuccess: res => {
        const formData = JSON.parse(res.config.data);
        toast.success(`${formData.u_Name}님의 정보를 수정하였습니다!`);
        const editUserData = {
          u_Idx: userInfo.u_Idx,
          u_Id: userInfo.u_Id,
          u_Address1: formData.u_Address1,
          u_Address2: formData.u_Address2,
          u_Address3: formData.u_Address3,
          u_Gender: formData.u_Gender,
          u_Img: formData.u_Img,
          u_Name: formData.u_Name,
          u_Phone: formData.u_Phone,
        };
        localStorage.setItem('userInfo', JSON.stringify(editUserData));
      },
    }
  );

  const removeUser = useMutation<AxiosResponse, AxiosError>(deleteUser, {
    onSuccess: () => {
      toast.success('탈퇴 성공!');
      localStorage.clear();
      dispatch(setAuth({ isAuth: false }));
      navigate('/');
    },
  });
  return { putUserInfo, removeUser };
};

export default useUser;
