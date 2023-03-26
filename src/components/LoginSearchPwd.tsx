import React, { useEffect, useReducer, useState } from 'react';
import type { TSearchPwd } from '../query/useGetLoginSearchPwdQuery';
import { useGetLoginSearchPwdQuery } from '../query/useGetLoginSearchPwdQuery';
import type { TNewPwd } from '../query/usePutLoginNewPwdQuery';
import usePutLoginNewPwdQuery from '../query/usePutLoginNewPwdQuery';
import theme from '../shared/style/theme';
import { NewPwdInitial } from '../shared/utils/inputInitialValue';
import { PwdReducer } from '../shared/utils/inputReducer';
import Button from './common/Button';
import ErrMsg from './common/ErrorMsg';
import Input from './common/Input';

export default function LoginSearchPwd() {
  // 비밀번호 찾기
  const [form, setForm] = useState<TSearchPwd>({
    u_Id: '',
    u_Name: '',
    u_Phone: '',
  });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const { data, refetch, isSuccess, isError } = useGetLoginSearchPwdQuery(form);
  const handleSearch = () => {
    refetch();
  };

  // 비밀번호 변경
  const [isNewPwd, setIsNewPwd] = useState<boolean>(false);
  const [newPwd, setNewPwd] = useState<TNewPwd>();
  const [state, setDispatch] = useReducer(PwdReducer, NewPwdInitial);
  const { pwd, pwdCheck } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });
  useEffect(() => {
    if (!state) return;
    setNewPwd({
      u_Idx: data?.data.u_Idx,
      u_Pw: pwd.val,
    });
  }, [data?.data.u_Idx, pwd.val]);
  const { mutate } = usePutLoginNewPwdQuery(newPwd);
  const handlePwdSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleNewPwd = () => {
    mutate();
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
              <strong>{form.u_Id}</strong> 님의 비밀번호가 기억나지 않으시면
              <br />
              비밀번호를 재설정해주세요.
            </p>
          )}
          {isNewPwd ? (
            <form onSubmit={handlePwdSubmit}>
              <Input
                {...inputStyle[0]}
                type="password"
                holderName="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
                name="pwd"
                value={pwd.val}
                onChange={onChange}
              />
              {!pwd.isCheck && <ErrMsg msg={pwd.msg} />}
              <Input
                {...inputStyle[1]}
                type="password"
                holderName="비밀번호 확인"
                name="pwdCheck"
                value={pwdCheck.val}
                onChange={onChange}
              />
              {!pwdCheck.isCheck && <ErrMsg msg={pwdCheck.msg} />}
              <Button
                text="비밀번호 재설정"
                margin="30px 0 0 0"
                onClick={handleNewPwd}
              />
            </form>
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
