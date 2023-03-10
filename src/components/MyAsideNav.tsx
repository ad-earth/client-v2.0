import * as t from '../style/myAsideNav.style';
import { useState } from 'react';
import useViewport from '../hooks/useViewport';
import GlobalModal from './common/GlobalModal';
import UserInfoModal from './MyUserInfoModal';
import MyWithdrawalModal from './MyWithdrawalModal';

interface ListType {
  name: string;
  path: string;
  id: number;
}
interface NavClickType {
  list: ListType;
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
}
interface ModalStateType {
  withdrawal: boolean;
  userInfo: boolean;
}

export default function MyAsideNav() {
  const viewport = useViewport();
  return viewport > 990 ? <Desktop /> : <Mobile />;
}

//** 데스크탑 버전 */
const Desktop = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalStateType>({
    withdrawal: false,
    userInfo: false,
  });

  /** 회원탈퇴 모달 */
  const withdrawal = isModalOpen.withdrawal && (
    <GlobalModal
      onClose={() => setIsModalOpen({ ...isModalOpen, withdrawal: false })}
    >
      <MyWithdrawalModal />
    </GlobalModal>
  );
  /** 정보수정 모달 */
  const userInfo = isModalOpen.userInfo && (
    <GlobalModal
      onClose={() => setIsModalOpen({ ...isModalOpen, userInfo: false })}
    >
      <UserInfoModal />
    </GlobalModal>
  );

  const navClickEvent = ({ list, e }: NavClickType) => {
    list.path === 'modal' && e.preventDefault();
    list.name === '회원탈퇴' &&
      setIsModalOpen({ ...isModalOpen, withdrawal: true });
    list.name === '정보 수정' &&
      setIsModalOpen({ ...isModalOpen, userInfo: true });
  };
  return (
    <>
      {withdrawal}
      {userInfo}
      <t.DesktopNavContent>
        {desktopList.map(list => (
          <t.NavItem key={list.id}>
            <t.Link
              to={list.path}
              onClick={e => navClickEvent({ list, e })}
              className={({ isActive }) => isActive && 'active'}
            >
              {list.name}
            </t.Link>
          </t.NavItem>
        ))}
      </t.DesktopNavContent>
    </>
  );
};
//** 모바일 버전 */
const Mobile = () => {
  return (
    <>
      {MobileList.map(list => (
        <t.MobileNavContent key={list.id}>
          <t.Link
            to={list.path}
            onClick={e => list.path === 'modal' && e.preventDefault()}
            className={({ isActive }) => isActive && 'active'}
          >
            {list.name}
          </t.Link>
        </t.MobileNavContent>
      ))}
    </>
  );
};

const desktopList: ListType[] = [
  { id: 1, name: '주문 조회', path: 'mypage' },
  { id: 2, name: '위시 리스트', path: 'wish' },
  { id: 3, name: '취소 조회', path: 'cancel' },
  { id: 4, name: '정보 수정', path: 'modal' },
  { id: 5, name: '회원탈퇴', path: 'modal' },
];

const MobileList: ListType[] = [
  { id: 1, name: '주문 조회', path: 'mypage' },
  { id: 2, name: '위시 리스트', path: 'wish' },
  { id: 3, name: '취소 조회', path: 'cancel' },
];
