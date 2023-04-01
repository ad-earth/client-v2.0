import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { setAuth } from '../redux/reducer/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

interface IProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: IProps) {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.authSlice.isAuth);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuth && token) {
      dispatch(setAuth({ isAuth: true }));
    } else return;
  }, []);

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
