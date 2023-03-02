import * as t from '../style/myUserHeadInfo.style';
import { useState } from 'react';
import { useViewport } from '../hooks/useViewport';
import GlobalModal from './common/GlobalModal';
import MyUserInfoModal from './MyUserInfoModal';

export default function MyUserHeadInfo() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const viewport = useViewport();
  const userName: string = localStorage.getItem('u_Name');
  const userImg: string = localStorage.getItem('u_Img');

  /** 정보수정 모달 */
  const userInfo = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <MyUserInfoModal />
    </GlobalModal>
  );
  return (
    <t.HeadContent>
      {userInfo}
      <t.HeadBox>
        <t.AvatarImg
          sx={
            viewport <= 990
              ? { width: 56, height: 56 }
              : { width: 85, height: 85 }
          }
          src={`${userImg ?? 'broken-image.jpg'}`}
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <t.Info>
          안녕하세요 <strong>{`${userName ?? '지구'}`}님</strong>
          <br />
          오늘도 같이 지구를 살려봅시다 🌍
        </t.Info>
      </t.HeadBox>
    </t.HeadContent>
  );
}
