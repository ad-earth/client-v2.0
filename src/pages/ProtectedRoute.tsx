import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { setAuth } from '../redux/reducer/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const getLocalStorage = (name: string): string | null =>
  localStorage.getItem(name);

const getIsToken = () => !!getLocalStorage('token');

export default function ProtectedRoute({ children, redirectPath }: IProps) {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.authSlice.isAuth);
  const isToken = getIsToken();

  useEffect(() => {
    if (isToken) {
      dispatch(setAuth({ isAuth: true }));
    } else return;
  }, []);

  if (!isAuth && !isToken) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
}
