import { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { HEADCATEGORY, HEADLOGO, WHITELOGO } from '../constants';
import useDropDown from '../hooks/useDropDown';
import useScrHeader from '../hooks/useScrollHeader';
import useViewport from '../hooks/useViewport';
import { setAuth } from '../redux/reducer/authSlice';
import { setCartStatus } from '../redux/reducer/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import * as t from '../style/header.style';
import GlobalModal from './common/GlobalModal';
import MenuDrop from './common/MenuDrop';
import HeaderAside from './my/HeaderAside';
import SearchBar from './SearchBar';

export default function Header() {
  const viewport = useViewport();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isHeaderVisible } = useScrHeader();
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isAuth = useAppSelector(state => state.authSlice.isAuth);
  const cartNo = useAppSelector(state => state.cartSlice.cartStatus);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const cartStatus = localStorage.getItem('cartStatus');
    if (token) {
      dispatch(setAuth({ isAuth: true }));
      dispatch(setCartStatus(Number(cartStatus)));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setAuth({ isAuth: false }));
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
              src={!isHeaderVisible ? `${HEADLOGO}` : `${WHITELOGO}`}
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
            {isAuth ? (
              <>
                <p onClick={handleLogout}>로그아웃</p>
                <HiOutlineUser className="userIcon" onClick={routeToMy} />
                <t.CartStatus>
                  <MdOutlineShoppingBag
                    className="cartIcon"
                    onClick={routeToCart}
                  />
                  <t.Badge>{cartNo ? cartNo : 0}</t.Badge>
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
