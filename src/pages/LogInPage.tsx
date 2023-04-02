import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalModal from '../components/common/GlobalModal';
import LoginSearchModal from '../components/login/LoginSearchModal';
import Button from '../elements/Button';
import Input from '../elements/Input';
import type { ILoginData } from '../query/useAuth';
import useAuth from '../query/useAuth';
import theme from '../shared/style/theme';
import * as t from '../style/loginPage.style';

export default function LogInPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<ILoginData>({ u_Id: '', u_Pw: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const {
    login: { mutate },
  } = useAuth();
  const loginClick = () => {
    mutate(form);
  };

  const routeToSignup = () => navigate('/signup');
  const routeToAdmin = () =>
    (window.location.href = 'https://adearth-admin.shop/');

  const searchModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <LoginSearchModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  return (
    <>
      {searchModal}
      <t.Container>
        <img src="/assets/loginLogo.webp" alt="loginLogo" />
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
            <p onClick={routeToSignup}>회원가입</p>
            <p onClick={() => setIsModalOpen(!isModalOpen)}>
              아이디/비밀번호 찾기
            </p>
          </t.EtcContents>
          <Button {...btnProps} onClick={routeToAdmin} />
        </t.EtcWrap>
      </t.Container>
    </>
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
