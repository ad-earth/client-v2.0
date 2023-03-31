import { Outlet } from 'react-router-dom';
import * as t from '../../style/myLayout.style';
import MyAsideNavSection from '../my/MyAsideNavSection';
import MyUserHeadSection from '../my/MyUserHeadSection';

export default function MyLayout() {
  return (
    <t.Main>
      <MyAsideNavSection />
      <t.MyPageSection>
        <MyUserHeadSection />
        <t.PageSection>
          <Outlet />
        </t.PageSection>
      </t.MyPageSection>
    </t.Main>
  );
}
