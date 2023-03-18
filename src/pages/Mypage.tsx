import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MyAsideNav from '../components/MyAsideNav';
import MyUserHead from '../components/MyUserHead';
import * as t from '../style/mypage.style';

export default function Mypage() {
  const getToken = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken) return;
    navigate('/');
  }, [getToken]);

  return (
    <t.MypageWrap style={{ height: '1200px' }}>
      <t.Nav>
        <MyAsideNav />
      </t.Nav>
      <t.Section>
        <MyUserHead />
        <Outlet />
      </t.Section>
    </t.MypageWrap>
  );
}
