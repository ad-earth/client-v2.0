import * as t from '../style/myUserInfoModal.style';
import { useEffect, useReducer, useState } from 'react';
import Address from './common/Address';
import Profile from './common/Profile';
import ErrMsg from './common/ErrorMsg';
import Input from './common/Input';
import Button from './common/Button';
import theme from '../shared/style/theme';
import { infoReducer } from '../shared/utils/inputReducer';
import { InfoInitial } from '../shared/utils/inputInitialValue';
import usePutUserInfoQuery, {
  UserInfoDataType,
} from '../query/usePutMyUserInfoQuery';

export default function MyUserInfoModal() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [state, setDispatch] = useReducer(infoReducer, InfoInitial);
  const { name, gender, phone } = state;
  const [formData, setFormData] = useState<UserInfoDataType>();
  const [imgUrl, setImgUrl] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [extraAddress, setExtraAddress] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });
  useEffect(() => {
    if (!state) return;
    setFormData({
      u_Name: name.val,
      u_Gender: gender.val,
      u_Phone: phone.val,
      u_Address1: zipcode,
      u_Address2: address,
      u_Address3: extraAddress,
      u_Img: imgUrl,
    });
  }, [name.val, gender.val, phone.val, zipcode, address, extraAddress, imgUrl]);
  const { mutate } = usePutUserInfoQuery(formData);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handlePutUserInfo = () => {
    mutate(formData, {
      onSuccess: () => {
        alert(`${formData.u_Name}님의 정보를 수정하였습니다!`);
        const editUserData = {
          u_Idx: userInfo.u_Idx,
          u_Id: userInfo.u_Id,
          u_Address1: formData.u_Address1,
          u_Address2: formData.u_Address2,
          u_Address3: formData.u_Address3,
          u_Gender: formData.u_Gender,
          u_Img: formData.u_Img,
          u_Name: formData.u_Name,
          u_Phone: formData.u_Phone,
        };
        localStorage.setItem('userInfo', JSON.stringify(editUserData));
      },
      onError: error => {
        const errMsg = error.response.data.errorMessage;
        if (errMsg === '중복된 연락처입니다.') {
          setDispatch({ type: 'phone', payload: 'err' });
        } else return;
      },
    });
  };
  return (
    <t.Container>
      <t.InfoHead>
        정보수정
        <t.Close />
      </t.InfoHead>
      <form onSubmit={handleSubmit}>
        <Profile imgUrl={imgUrl} setImgUrl={setImgUrl} />
        <p>이름</p>
        <Input
          holderName="이름을(를) 입력하세요"
          name="name"
          value={name.val}
          color={theme.fc14}
          onChange={onChange}
        />
        {!name.isCheck && <ErrMsg msg={name.msg} />}
        <p>성별</p>
        <t.RadioWrap>
          <t.Radio
            type="radio"
            id="남성"
            name="gender"
            value="남성"
            checked={gender.genderCheck === 1}
            onChange={onChange}
          />
          <label htmlFor="남성">남자</label>
          <t.Radio
            type="radio"
            id="여성"
            name="gender"
            value="여성"
            checked={gender.genderCheck === 2}
            onChange={onChange}
          />
          <label htmlFor="여성">여자</label>
        </t.RadioWrap>
        {!gender.isCheck && <ErrMsg msg={gender.msg} />}
        <p>연락처</p>
        <Input
          holderName="연락처"
          name="phone"
          value={phone.val}
          color={theme.fc14}
          onChange={onChange}
        />
        {!phone.isCheck && <ErrMsg msg={phone.msg} />}
        <p>주소</p>
        <Address
          zipcode={zipcode}
          address={address}
          extraAddress={extraAddress}
          setZipcode={setZipcode}
          setAddress={setAddress}
          setExtraAddress={setExtraAddress}
        />
        <Button
          text="정보수정"
          margin="30px auto"
          radius="30px"
          fontSize={theme.fs14}
          disabled={
            !(
              name &&
              gender &&
              phone &&
              imgUrl &&
              zipcode &&
              address &&
              extraAddress
            )
          }
          onClick={handlePutUserInfo}
        />
      </form>
    </t.Container>
  );
}
