import React, { useEffect, useReducer, useState } from 'react';
import Button from '../../elements/Button';
import ErrMsg from '../../elements/ErrorMsg';
import Input from '../../elements/Input';
import type { INewPwdData } from '../../query/useAuthSearch';
import useAuthSearch from '../../query/useAuthSearch';
import theme from '../../shared/style/theme';
import { NewPwdInitial } from '../../shared/utils/inputInitialValue';
import { PwdReducer } from '../../shared/utils/inputReducer';
interface IProps {
  idx: number;
}
export default function LoginSetNewPwd({ idx }: IProps) {
  const [newPwd, setNewPwd] = useState<INewPwdData>();
  const [state, setDispatch] = useReducer(PwdReducer, NewPwdInitial);
  const { pwd, pwdCheck } = state;

  const handlePwdSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });

  useEffect(() => {
    if (!state) return;
    setNewPwd({
      u_Idx: idx && idx,
      u_Pw: pwd.val,
    });
  }, [idx, pwd.val, state]);

  const {
    updatePwd: { mutate },
  } = useAuthSearch();
  const handleNewPwd = () => {
    mutate(newPwd);
  };

  return (
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
