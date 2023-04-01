import React, { useState } from 'react';
import Button from '../../elements/Button';
import ErrMsg from '../../elements/ErrorMsg';
import Input from '../../elements/Input';
import type { ISearchPwdData } from '../../query/useAuthSearch';
import useAuthSearch from '../../query/useAuthSearch';
import theme from '../../shared/style/theme';
import LoginSetNewPwd from './LoginSetNewPwd';

export default function LoginSearchPwd() {
  const [form, setForm] = useState<ISearchPwdData>({
    u_Id: '',
    u_Name: '',
    u_Phone: '',
  });
  const [isNewPwd, setIsNewPwd] = useState<boolean>(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const {
    searchPwd: { data, refetch, isSuccess, isError },
  } = useAuthSearch(form);
  const handleSearch = () => {
    refetch();
  };

  return (
    <>
      {!data?.data ? (
        <>
          <form onSubmit={handleSubmit}>
            <Input
              {...inputStyle[0]}
              holderName="가입한 아이디"
              name="u_Id"
              value={form.u_Id}
              onChange={handleChange}
            />
            <Input
              {...inputStyle[1]}
              holderName="이름"
              name="u_Name"
              value={form.u_Name}
              onChange={handleChange}
            />
            <Input
              {...inputStyle[1]}
              holderName="연락처"
              name="u_Phone"
              value={form.u_Phone}
              onChange={handleChange}
            />
            {isError && (
              <ErrMsg msg="존재하지 않는 회원입니다. 다시 확인해주세요." />
            )}
            <Button
              text="비밀번호 찾기"
              margin="30px 0 0 0"
              onClick={handleSearch}
            />
          </form>
        </>
      ) : (
        <>
          {isSuccess && (
            <p>
              <strong>{form?.u_Id}</strong> 님의 비밀번호가 기억나지 않으시면
              <br />
              비밀번호를 재설정해주세요.
            </p>
          )}
          {isNewPwd ? (
            <LoginSetNewPwd idx={data?.data.u_Idx} />
          ) : (
            <Button
              text="비밀번호 재설정"
              margin="30px 0 0 0"
              onClick={() => setIsNewPwd(!isNewPwd)}
            />
          )}
        </>
      )}
    </>
  );
}

const inputStyle = [
  {
    color: `${theme.fc14}`,
    bgColor: `${theme.bg04}`,
    fontSize: `${theme.fs14}`,
    fBorder: `1px solid ${theme.ls16}`,
  },
  {
    color: `${theme.fc14}`,
    bgColor: `${theme.bg04}`,
    fontSize: `${theme.fs14}`,
    fBorder: `1px solid ${theme.ls16}`,
    marginTop: '1px',
  },
];
