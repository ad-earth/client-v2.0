import React, { useState } from 'react';
import Button from '../../elements/Button';
import ErrMsg from '../../elements/ErrorMsg';
import Input from '../../elements/Input';
import type { ISearchIdData } from '../../query/useAuth';
import useAuth from '../../query/useAuth';
import theme from '../../shared/style/theme';

export default function LoginSearchId() {
  const [form, setForm] = useState<ISearchIdData>({ u_Name: '', u_Phone: '' });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const {
    searchId: { data, refetch, isSuccess, isError },
  } = useAuth(form);
  const handleSearch = () => {
    refetch();
  };

  const routeToLogin = () => {
    window.location.reload();
  };

  return (
    <>
      {!data?.data ? (
        <>
          <p>가입한 정보로 아이디를 찾아보세요.</p>
          <form onSubmit={handleSubmit}>
            <Input
              {...inputStyle[0]}
              name="u_Name"
              value={form.u_Name}
              onChange={handleChange}
            />
            <Input
              {...inputStyle[1]}
              name="u_Phone"
              value={form.u_Phone}
              onChange={handleChange}
            />
            {isError && (
              <ErrMsg msg="존재하지 않는 회원입니다. 다시 확인해주세요." />
            )}
            <Button
              text="아이디 찾기"
              margin="30px 0 0 0"
              onClick={handleSearch}
            />
          </form>
        </>
      ) : (
        <>
          {isSuccess && (
            <p>
              회원님의 아이디는 <strong>{data?.data.u_Id}</strong> 입니다.
            </p>
          )}
          <Button
            text="로그인 하기"
            margin="30px 0 0 0"
            onClick={routeToLogin}
          />
        </>
      )}
    </>
  );
}

const inputStyle = [
  {
    holderName: '이름',
    type: 'text',
    color: `${theme.fc14}`,
    bgColor: `${theme.bg04}`,
    fontSize: `${theme.fs14}`,
    fBorder: `1px solid ${theme.ls16}`,
  },
  {
    holderName: '연락처',
    type: 'text',
    color: `${theme.fc14}`,
    bgColor: `${theme.bg04}`,
    fontSize: `${theme.fs14}`,
    fBorder: `1px solid ${theme.ls16}`,
    marginTop: '1px',
  },
];
