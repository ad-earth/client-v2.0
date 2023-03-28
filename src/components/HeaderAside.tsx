import { useState } from 'react';
import { CgMoreVerticalAlt } from 'react-icons/cg';
import { ASIDECATEGORY, HEADCATEGORY } from '../constants';
import ProfileImage from '../elements/ProfileImage';
import useDropDown from '../hooks/useDropDown';
import theme from '../shared/style/theme';
import * as t from '../style/headerAside.style';
import GlobalModal from './common/GlobalModal';
import { SideMenuDrop } from './common/MenuDrop';
import MyUserInfoModal from './MyUserInfoModal';

export default function HeaderAside() {
  const { isDropped, dropRef, handleRemove } = useDropDown();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = localStorage.getItem('token');

  const userModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyUserInfoModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  const routeToLogin = () => window.location.replace('/login');
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {userModal}
      {!isModalOpen && (
        <t.Container>
          <t.Aside>
            <t.Top ref={dropRef}>
              <div>
                {token ? (
                  <ProfileImage
                    image={userInfo?.u_Img && userInfo?.u_Img}
                    name={userInfo?.u_Name && userInfo.u_Name}
                    id={userInfo?.u_Id && userInfo.u_Id}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  />
                ) : (
                  <p onClick={routeToLogin}>로그인 후 이용해주세요!</p>
                )}
              </div>
              {token && (
                <>
                  <CgMoreVerticalAlt
                    className="etcIcon"
                    onClick={handleRemove}
                  />
                  <SideMenuDrop isDropped={isDropped} {...dropStyle}>
                    <ul>
                      {ASIDECATEGORY.map(item => (
                        <a key={item.id} href={item.path}>
                          <li>{item.cate}</li>
                        </a>
                      ))}
                      <li onClick={handleLogOut}>로그아웃</li>
                    </ul>
                  </SideMenuDrop>
                </>
              )}
            </t.Top>
            <t.bottom>
              <ul>
                {HEADCATEGORY.map(val => (
                  <a key={val.id} href={val.path}>
                    <li>{val.cate}</li>
                  </a>
                ))}
              </ul>
            </t.bottom>
          </t.Aside>
        </t.Container>
      )}
    </>
  );
}

const dropStyle = {
  width: '140px',
  top: '80px',
  left: '130px',
  radius: '5px',
  fcColor: `${theme.fc10}`,
  bgColor: `${theme.bg01}`,
};
