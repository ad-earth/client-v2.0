import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import ProfileImage from '../../elements/ProfileImage';
import { imageUploader } from '../../shared/api/imageUploader';
import * as t from '../../style/profile.style';
interface IProps {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
}

function Profile({ imgUrl, setImgUrl }: IProps) {
  const [isUser, setIsUser] = useState<boolean>(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => fileInputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    imageUploader(e.target.files).then(url => setImgUrl(url));
  };

  useEffect(() => {
    if (!isUser && userInfo !== null) {
      setImgUrl(userInfo?.u_Img);
    }
    setIsUser(true);
  }, [!isUser]);

  return (
    <t.Container>
      <ProfileImage
        image={imgUrl && imgUrl}
        name="userImage"
        width="80px"
        height="80px"
      />
      <t.Wrap>
        <AiOutlineCamera className="upload" onClick={handleClick} />
        <input
          type="file"
          accept="image/*"
          name="file"
          ref={fileInputRef}
          onChange={handleChange}
        />
      </t.Wrap>
    </t.Container>
  );
}

export default Profile;
