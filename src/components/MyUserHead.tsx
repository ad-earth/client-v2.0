import * as t from '../style/myUserHeadInfo.style';
import { useState } from 'react';
import useViewport from '../hooks/useViewport';
import GlobalModal from './common/GlobalModal';
import MyUserInfoModal from './MyUserInfoModal';

interface UserType {
  u_Img: string;
  u_Name: string;
}

export default function MyUserHeadInfo() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const viewport = useViewport();
  const userInfo: UserType = JSON.parse(localStorage.getItem('userInfo'));

  /** 정보수정 모달 */
  const userModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyUserInfoModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );
  return (
    <t.HeadContent>
      {userModal}
      <t.HeadBox>
        <t.AvatarImg
          sx={
            viewport <= 990
              ? { width: 56, height: 56 }
              : { width: 85, height: 85 }
          }
          src={`${userInfo.u_Img ?? 'broken-image.jpg'}`}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <t.Info>
          안녕하세요 <strong>{`${userInfo.u_Name ?? '지구'}`}님</strong>
          <br />
          오늘도 같이 지구를 살려봅시다 🌍
        </t.Info>
      </t.HeadBox>
    </t.HeadContent>
  );
}
