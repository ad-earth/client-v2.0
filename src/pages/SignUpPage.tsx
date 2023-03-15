import * as t from '../style/signUpPage.style';
import theme from '../shared/style/theme';
import Button from '../components/common/Button';
import Profile from '../components/common/Profile';
import Address from '../components/common/Address';
import Input from '../components/common/Input';
import ErrMsg from '../components/common/ErrorMsg';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePostSignupQuery, {
  SignUpDataType,
} from '../query/usePostSignupQuery';
import { inputReducer } from '../shared/utils/inputReducer';
import { signupInitial } from '../shared/utils/inputInitialValue';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [state, setDispatch] = useReducer(inputReducer, signupInitial);
  const { id, pwd, pwdCheck, name, gender, phone } = state;
  const [formData, setFormData] = useState<SignUpDataType>();
  const [imgUrl, setImgUrl] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });
  useEffect(() => {
    if (!state) return;
    setFormData({
      u_Id: id.val,
      u_Pw: pwd.val,
      u_Name: name.val,
      u_Gender: gender.val,
      u_Phone: phone.val,
      u_Address1: zipcode,
      u_Address2: address,
      u_Address3: extraAddress,
      u_Img: imgUrl,
    });
  }, [
    id.val,
    pwd.val,
    pwdCheck.val,
    name.val,
    gender.val,
    phone.val,
    zipcode,
    address,
    extraAddress,
    imgUrl,
  ]);

  const { mutate } = usePostSignupQuery(formData);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSignup = () => {
    mutate(formData, {
      onSuccess: () => {
        alert(
          `${formData.u_Name}님 환영합니다. 지구샵은 로그인 후 이용해주세요!`
        );
        navigate('/');
        setDispatch({ type: 'reset' });
      },
      onError: error => {
        const errMsg = error.response.data.errorMessage;
        if (errMsg === '중복된 연락처입니다.') {
          setDispatch({ type: 'phone', payload: 'err' });
        } else if (errMsg === '중복된 아이디입니다.') {
          setDispatch({ type: 'id', payload: 'err' });
        } else return;
      },
    });
  };

  return (
    <t.Container>
      <form onSubmit={handleSubmit}>
        <Profile imgUrl={imgUrl} setImgUrl={setImgUrl} />
        <Input
          holderName="아이디 (영문,숫자 5~10자)"
          name="id"
          color={theme.fc14}
          value={id.val}
          onChange={onChange}
        />
        {!id.isCheck && <ErrMsg msg={id.msg} />}
        <Input
          type="password"
          holderName="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
          name="pwd"
          value={pwd.val}
          color={theme.fc14}
          onChange={onChange}
        />
        {!pwd.isCheck && <ErrMsg msg={pwd.msg} />}
        <Input
          type="password"
          holderName="비밀번호 확인"
          value={pwdCheck.val}
          name="pwdCheck"
          onChange={onChange}
          color={theme.fc14}
        />
        {!pwdCheck.isCheck && <ErrMsg msg={pwdCheck.msg} />}
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
            defaultChecked
            onChange={onChange}
          />
          <label htmlFor="남성">남자</label>
          <t.Radio
            type="radio"
            id="여성"
            name="gender"
            value="여성"
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
          text="가입하기"
          margin="40px auto"
          radius="30px"
          fontSize={theme.fs14}
          disabled={
            !(
              id.isCheck &&
              pwd.isCheck &&
              pwdCheck.isCheck &&
              name.isCheck &&
              gender.isCheck &&
              phone.isCheck &&
              imgUrl &&
              zipcode &&
              address &&
              extraAddress
            )
          }
          onClick={handleSignup}
        />
      </form>
    </t.Container>
  );
}
