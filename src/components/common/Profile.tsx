import * as t from '../../style/profile.style';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactS3Client from 'react-aws-s3-typescript';
import { s3Config } from '../../shared/utils/s3Config';
import { IConfig } from '../../../node_modules/react-aws-s3-typescript/dist/types';

export interface PropsType {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
}
export interface UploadImg {
  file: File;
  fileName: string;
  thumbnail: string;
  type: string;
}

const Profile = ({ imgUrl, setImgUrl }: PropsType) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>(null);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const s3 = new ReactS3Client(s3Config as IConfig);
    const fileList = e.target.files;
    const fileLength = fileList?.length;
    if (fileLength && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImgFile({
        file: fileList[0],
        fileName: fileList[0].name,
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      try {
        await s3.uploadFile(fileList[0], fileList[0].name).then(data => {
          setImgUrl(data.location);
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const showImage = useMemo(() => {
    if (userInfo?.u_Img || imgFile == null) {
      return <t.Profile src={userInfo?.u_Img} alt="default profile" />;
    }
    if (!userInfo?.u_Img && imgFile) {
      return <t.Profile src={imgFile.thumbnail} alt={imgFile.type} />;
    }
  }, [imgFile, userInfo?.u_Img]);

  useEffect(() => {
    if (userInfo?.u_Img && !imgFile) {
      setImgUrl(userInfo?.u_Img);
    }
  }, [userInfo?.u_Img]);
  return (
    <t.Container>
      {showImage}
      <t.Wrap>
        <t.Upload onClick={() => handleClickFileInput()} />
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          ref={fileInputRef}
          onChange={uploadProfile}
        />
      </t.Wrap>
    </t.Container>
  );
};

export default Profile;
