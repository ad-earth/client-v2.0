import * as t from '../style/header.style';
import headLogo from '../assets/headLogo.png';
import whiteLogo from '../assets/whiteLogo.png';
import SearchBar from './SearchBar';
import useViewport from '../hooks/useViewport';
import useDropDown from '../hooks/useDropDown';
import MenuDrop from './common/MenuDrop';
import { useScrHeaderVisible } from '../hooks/useScrollHeader';
import { useNavigate } from 'react-router-dom';

let cateData: {
  id: number;
  cate: string;
  path: string;
}[] = [
  { id: 1, cate: '전체', path: '/list/전체' },
  { id: 2, cate: '욕실', path: '/list/욕실' },
  { id: 3, cate: '주방', path: '/list/주방' },
  { id: 4, cate: '음료용품', path: '/list/음료용품' },
  { id: 5, cate: '생활', path: '/list/생활' },
  { id: 6, cate: '식품', path: '/list/식품' },
  { id: 7, cate: '화장품', path: '/list/화장품' },
  { id: 8, cate: '문구', path: '/list/문구' },
];

const token = localStorage.getItem('token');

const Header = () => {
  const viewport = useViewport();
  const navigate = useNavigate();
  const { isHeaderVisible } = useScrHeaderVisible();
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const handleLogout = () => {
    localStorage.clear();
  };
  const routeToLogin = () => {
    navigate('/login');
  };

  return (
    <t.Container isHeaderVisible={isHeaderVisible}>
      <t.Nav isHeaderVisible={isHeaderVisible}>
        <t.LeftSection>
          <img
            src={!isHeaderVisible ? `${headLogo}` : `${whiteLogo}`}
            alt="headLogo"
          />
          <p onClick={handleRemove} ref={dropRef}>
            장보기
          </p>
          <MenuDrop isDropped={isDropped} cateData={cateData} />
        </t.LeftSection>
        <t.RightSection>
          {!isHeaderVisible ? <SearchBar /> : null}
          {token ? (
            <>
              <p onClick={handleLogout}>로그아웃</p>
              {!isHeaderVisible ? (
                <>
                  <t.UserIcon />
                  <t.CountBadge badgeContent={1}>
                    <t.ShopIcon />
                  </t.CountBadge>
                </>
              ) : (
                <>
                  <t.WhiteUserIcon />
                  <t.CountBadge badgeContent={1}>
                    <t.WhiteShopIcon />
                  </t.CountBadge>
                </>
              )}
            </>
          ) : (
            <>
              <p onClick={routeToLogin}>로그인</p>
              <p>회원가입</p>
            </>
          )}
          {viewport <= 990 && <t.EtcIcon />}
        </t.RightSection>
      </t.Nav>
    </t.Container>
  );
};

export default Header;
