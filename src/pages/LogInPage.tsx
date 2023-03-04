import * as t from '../style/loginPage.style';
import theme from '../shared/style/theme';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../assets/logInLogo.jpeg';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import usePostLoginQuery from '../query/usePostLoginQuery';

export type LoginType = {
  u_Id: string;
  u_Pw: string;
};

export default function LogInPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginType>({ u_Id: '', u_Pw: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { mutate, isSuccess } = usePostLoginQuery(form);

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      window.location.href = '/';
    }
  }, [isSuccess]);

  const loginClick = () => {
    mutate();
  };

  const routeToAdmin = () => {
    window.location.href = 'https://adearth-admin.shop/';
  };

  return (
    <t.Container>
      <img src={loginLogo} alt="loginLogo" />
      <form onSubmit={handleSubmit}>
        <Input
          holderName="아이디"
          type="text"
          name="u_Id"
          value={form.u_Id}
          color={theme.fc14}
          onChange={handleChange}
        />
        <Input
          holderName="비밀번호"
          type="password"
          name="u_Pw"
          value={form.u_Pw}
          color={theme.fc14}
          onChange={handleChange}
        />
        <Button
          radius="30px"
          fontSize={theme.fs14}
          margin="30px auto"
          text="로그인"
          onClick={loginClick}
        />
      </form>
      <t.EtcWrap>
        <t.EtcContents>
          <p>회원가입</p>
          <p>아이디/비밀번호 찾기</p>
        </t.EtcContents>
        <Button {...btnProps} onClick={routeToAdmin} />
      </t.EtcWrap>
    </t.Container>
  );
}

const btnProps = {
  text: '광고주 솔루션 바로가기',
  radius: '30px',
  fontSize: `${theme.fs14}`,
  color: `${theme.fc14}`,
  bgColor: `${theme.bg01}`,
  hBgColor: `${theme.bg08}`,
  border: `0.5px solid ${theme.ls03}`,
  hBorder: `0.5px solid ${theme.ls03}`,
  margin: '30px auto',
};
