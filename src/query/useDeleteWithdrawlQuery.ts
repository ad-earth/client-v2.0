import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../shared/api/userApi';

export default function useDeleteWithdrawalQuery() {
  const navigate = useNavigate();
  const removeUser = useMutation<AxiosResponse, AxiosError>(deleteUser, {
    onSuccess: () => {
      alert('탈퇴 성공!');
      localStorage.clear();
      navigate('/');
    },
  });

  return { removeUser };
}
