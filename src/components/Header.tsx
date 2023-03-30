import { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { HEADCATEGORY } from '../constants';
import useDropDown from '../hooks/useDropDown';
import useScrHeader from '../hooks/useScrollHeader';
import useViewport from '../hooks/useViewport';
import * as t from '../style/header.style';
import GlobalModal from './common/GlobalModal';
import MenuDrop from './common/MenuDrop';
import HeaderAside from './HeaderAside';
import SearchBar from './SearchBar';

export default function Header() {
  const viewport = useViewport();
  const navigate = useNavigate();
  const { isHeaderVisible } = useScrHeader();
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cartStatus = localStorage.getItem('cartStatus');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [isLogin]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const routeToMain = () => navigate('/');
  const routeToMy = () => navigate('/mypage');
  const routeToCart = () => navigate('/cart');
  const routeToLogin = () => navigate('/login');
  const routeToSignUp = () => navigate('/signup');

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
              src={
                !isHeaderVisible
                  ? '/assets/headLogo.webp'
                  : '/assets/whiteLogo.webp'
              }
              alt="headLogo"
              onClick={routeToMain}
            />
            <p onClick={handleRemove} ref={dropRef}>
              장보기
            </p>
            <MenuDrop isDropped={isDropped} cateData={HEADCATEGORY} />
          </t.LeftSection>
          <t.RightSection>
            {!isHeaderVisible ? <SearchBar /> : null}
            {isLogin ? (
              <>
                <p onClick={handleLogout}>로그아웃</p>
                <HiOutlineUser className="userIcon" onClick={routeToMy} />
                <t.CartStatus>
                  <MdOutlineShoppingBag
                    className="cartIcon"
                    onClick={routeToCart}
                  />
                  <t.Badge>{cartStatus ? cartStatus : 0}</t.Badge>
                </t.CartStatus>
              </>
            ) : (
              <>
                <p onClick={routeToLogin}>로그인</p>
                <p onClick={routeToSignUp}>회원가입</p>
              </>
            )}
            {viewport <= 990 && (
              <CgDetailsMore
                className="etcIcon"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            )}
          </t.RightSection>
        </t.Nav>
      </t.Container>
    </>
  );
}
