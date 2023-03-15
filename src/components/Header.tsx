import * as t from '../style/header.style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import headLogo from '../assets/headLogo.png';
import whiteLogo from '../assets/whiteLogo.png';
import SearchBar from './SearchBar';
import useViewport from '../hooks/useViewport';
import MenuDrop from './common/MenuDrop';
import useDropDown from '../hooks/useDropDown';
import useScrHeader from '../hooks/useScrollHeader';
import GlobalModal from './common/GlobalModal';
import HeaderAside from './HeaderAside';


export type CateType = {
  id: number;
  cate: string;
  path: string;
};

export default function Header() {
  const viewport = useViewport();
  const navigate = useNavigate();
  const { isHeaderVisible } = useScrHeader();
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [isLogin]);
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
  };
  const routeToMain = () => {
    navigate('/');
  };
  const routeToMy = () => {
    navigate('/mypage');
  };
  const routeToCart = () => {
    navigate('/cart');
  };
  const routeToLogin = () => {
    navigate('/login');
  };
  const routeToSignUp = () => {
    navigate('/signup');
  };

  const asideNav = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <HeaderAside />
    </GlobalModal>
  );

  return (
    <>
      {asideNav}
      <t.Container isHeaderVisible={isHeaderVisible}>
        <t.Nav isHeaderVisible={isHeaderVisible}>
          <t.LeftSection>
            <img
              src={!isHeaderVisible ? `${headLogo}` : `${whiteLogo}`}
              alt="headLogo"
              onClick={routeToMain}
            />
            <p onClick={handleRemove} ref={dropRef}>
              장보기
            </p>
            <MenuDrop isDropped={isDropped} cateData={cateData} />
          </t.LeftSection>
          <t.RightSection>
            {!isHeaderVisible ? <SearchBar /> : null}
            {isLogin ? (
              <>
                <p onClick={handleLogout}>로그아웃</p>
                <t.UserIcon onClick={routeToMy} />
                <t.CountBadge badgeContent={1}>
                  <t.ShopIcon onClick={routeToCart} />
                </t.CountBadge>
              </>
            ) : (
              <>
                <p onClick={routeToLogin}>로그인</p>
                <p onClick={routeToSignUp}>회원가입</p>
              </>
            )}
            {viewport <= 990 && (
              <t.EtcIcon onClick={() => setIsModalOpen(!isModalOpen)} />
            )}
          </t.RightSection>
        </t.Nav>
      </t.Container>
    </>
  );
}

export const cateData: CateType[] = [
  { id: 1, cate: '전체', path: '/list/전체' },
  { id: 2, cate: '욕실', path: '/list/욕실' },
  { id: 3, cate: '주방', path: '/list/주방' },
  { id: 4, cate: '음료용품', path: '/list/음료용품' },
  { id: 5, cate: '생활', path: '/list/생활' },
  { id: 6, cate: '식품', path: '/list/식품' },
  { id: 7, cate: '화장품', path: '/list/화장품' },
  { id: 8, cate: '문구', path: '/list/문구' },
];
