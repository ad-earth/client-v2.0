import { useState } from 'react';
import useViewport from '../hooks/useViewport';
import * as t from '../style/myAsideNavSection.style';
import GlobalModal from './common/GlobalModal';
import MyUserInfoModal from './MyUserInfoModal';
import MyWithdrawalModal from './MyWithdrawalModal';

interface IList {
  name: string;
  path: string;
  id: number;
}
interface INavClick {
  list: IList;
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
}
interface IModalState {
  withdrawal: boolean;
  userInfo: boolean;
}

export default function MyAsideNavSection() {
  const viewport = useViewport();
  return viewport > 990 ? <Desktop /> : <Mobile />;
}

//** 데스크탑 버전 */
function Desktop() {
  const [isModalOpen, setIsModalOpen] = useState<IModalState>({
    withdrawal: false,
    userInfo: false,
  });

  /** 회원탈퇴 모달 */
  const withdrawal = isModalOpen.withdrawal && (
    <GlobalModal
      onClose={() => setIsModalOpen({ ...isModalOpen, withdrawal: false })}
    >
      <MyWithdrawalModal
        onClose={() => setIsModalOpen({ ...isModalOpen, withdrawal: false })}
      />
    </GlobalModal>
  );
  /** 정보수정 모달 */
  const userInfo = isModalOpen.userInfo && (
    <GlobalModal
      onClose={() => setIsModalOpen({ ...isModalOpen, userInfo: false })}
    >
      <MyUserInfoModal
        onClose={() => setIsModalOpen({ ...isModalOpen, userInfo: false })}
      />
    </GlobalModal>
  );

  const navClickEvent = ({ list, e }: INavClick) => {
    list.path === 'modal' && e.preventDefault();
    list.name === '회원탈퇴' &&
      setIsModalOpen({ ...isModalOpen, withdrawal: true });
    list.name === '정보 수정' &&
      setIsModalOpen({ ...isModalOpen, userInfo: true });
  };
  return (
    <t.Aside>
      {withdrawal}
      {userInfo}
      <t.DesktopNavSection>
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
      </t.DesktopNavSection>
    </t.Aside>
  );
}
//** 모바일 버전 */
function Mobile() {
  return (
    <t.Aside>
      {MobileList.map(list => (
        <t.MobileNavSection key={list.id}>
          <t.Link
            to={list.path}
            onClick={e => list.path === 'modal' && e.preventDefault()}
            className={({ isActive }) => isActive && 'active'}
          >
            {list.name}
          </t.Link>
        </t.MobileNavSection>
      ))}
    </t.Aside>
  );
}

const desktopList: IList[] = [
  { id: 1, name: '주문 조회', path: 'mypage' },
  { id: 2, name: '위시 리스트', path: 'wish' },
  { id: 3, name: '취소 조회', path: 'cancel' },
  { id: 4, name: '정보 수정', path: 'modal' },
  { id: 5, name: '회원탈퇴', path: 'modal' },
];

const MobileList: IList[] = [
  { id: 1, name: '주문 조회', path: 'mypage' },
  { id: 2, name: '위시 리스트', path: 'wish' },
  { id: 3, name: '취소 조회', path: 'cancel' },
];
