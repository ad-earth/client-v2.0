import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as t from '../../style/myLayout.style';
import MyAsideNavSection from '../MyAsideNavSection';
import MyUserHeadSection from '../MyUserHeadSection';

export default function MyLayout() {
  const navigate = useNavigate();
  const isToken = !!localStorage.getItem('token');

  useEffect(() => {
    !isToken && navigate('/');
  }, []);

  return (
    isToken && (
      <t.Main>
        <MyAsideNavSection />
        <t.MyPageSection>
          <MyUserHeadSection />
          <Outlet />
        </t.MyPageSection>
      </t.Main>
    )
  );
}
