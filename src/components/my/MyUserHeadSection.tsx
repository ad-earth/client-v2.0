import { useState } from 'react';
import ProfileImage from '../../elements/ProfileImage';
import useViewport from '../../hooks/useViewport';
import * as t from '../../style/myUserHeadSection.style';
import GlobalModal from '../common/GlobalModal';
import MyUserInfoModal from '../common/UserInfoModal';

interface IUser {
  u_Img: string;
  u_Name: string;
}

export default function MyUserHeadSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const viewport = useViewport();
  const userInfo: IUser = JSON.parse(localStorage.getItem('userInfo'));

  const userModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyUserInfoModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );
  return (
    <t.Base>
      {userModal}
      <t.Section>
        <ProfileImage
          image={userInfo?.u_Img}
          name="userImage"
          width={`${viewport <= 990 ? '56px' : '80px'}`}
          height={`${viewport <= 990 ? '56px' : '80px'}`}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <t.Info>
          안녕하세요 <strong>{`${userInfo?.u_Name ?? '지구'}`}님</strong>
          <br />
          오늘도 같이 지구를 살려봅시다 🌍
        </t.Info>
      </t.Section>
    </t.Base>
  );
}
