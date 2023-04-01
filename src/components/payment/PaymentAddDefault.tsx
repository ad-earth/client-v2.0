import React, { useEffect, useReducer, useState } from 'react';
import { shallowEqual } from 'react-redux';
import Button from '../../elements/Button';
import ErrMsg from '../../elements/ErrorMsg';
import Input from '../../elements/Input';
import { setPayInfo, setUserInfo } from '../../redux/reducer/payInputSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import theme from '../../shared/style/theme';
import { PayInputInitial } from '../../shared/utils/inputInitialValue';
import { PayReducer } from '../../shared/utils/inputReducer';
import * as t from '../../style/paymentInput.style';

export type TUser = { d_Name: string; d_Phone: string };
type TProps = {
  isTabOpen: boolean;
};

export default function PaymentAddDefault(isTabOpen: TProps) {
  const dispatch = useAppDispatch();
  const payInfo = useAppSelector(state => state.payInputSlice, shallowEqual);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [states, setDispatch] = useReducer(PayReducer, PayInputInitial);
  const { name, phone } = states;
  const [resetUser, setResetUser] = useState<TUser>();
  const [isResetUser, setIsResetUser] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });

  const handleOpenUser = () => setIsResetUser(!isResetUser);
  const handleReset = () => {
    setIsResetUser(!isResetUser);
    if (!resetUser.d_Name && !resetUser.d_Phone) setDispatch({ type: 'reset' });
    else {
      dispatch(
        setUserInfo({ d_Name: resetUser?.d_Name, d_Phone: resetUser?.d_Phone })
      );
    }
  };

  useEffect(() => {
    if (!states) return;
    setResetUser({
      d_Name: name.val,
      d_Phone: phone.val,
    });
  }, [name.val, phone.val]);

  useEffect(() => {
    if (isTabOpen) {
      dispatch(
        setPayInfo({
          d_No: null,
          d_Name: resetUser?.d_Name ? resetUser.d_Name : user?.u_Name,
          d_Phone: resetUser?.d_Name ? resetUser.d_Phone : user?.u_Phone,
          d_Address1: user?.u_Address1,
          d_Address2: user?.u_Address2,
          d_Address3: user?.u_Address3,
          d_Memo: payInfo?.d_Memo,
        })
      );
    }
  }, [dispatch, isTabOpen, resetUser, user]);

  return (
    <>
      <t.TextArea>
        {!isResetUser ? (
          <>
            <t.Text>{payInfo?.d_Name}</t.Text>
            <t.TextGray>{payInfo?.d_Phone}</t.TextGray>
          </>
        ) : (
          <>
            <t.InputArea onSubmit={handleSubmit}>
              <Input
                {...inputStyle[0]}
                holderName="주문자명"
                name="name"
                value={name.val}
                onChange={onChange}
              />
              <Input
                {...inputStyle[1]}
                holderName="연락처"
                name="phone"
                value={phone.val}
                onChange={onChange}
              />
              <Button
                {...(resetUser?.d_Name && resetUser?.d_Phone
                  ? { ...btnStyle[0] }
                  : { ...btnStyle[1] })}
                text={resetUser?.d_Name && resetUser?.d_Phone ? '변경' : '취소'}
                onClick={handleReset}
              />
            </t.InputArea>
            {!name.isCheck && <ErrMsg msg={name.msg} />}
            {!phone.isCheck && <ErrMsg msg={phone.msg} />}
          </>
        )}
        <t.TextGray>
          {payInfo?.d_Address2} {payInfo?.d_Address3}
        </t.TextGray>
        <t.TextGray>({payInfo?.d_Address1})</t.TextGray>
      </t.TextArea>
      {!isResetUser && (
        <Button
          {...btnStyle[0]}
          text="이름/연락처 수정"
          onClick={handleOpenUser}
        />
      )}
    </>
  );
}
const inputStyle = [
  {
    type: 'text',
    width: '30%',
    color: theme.fc08,
    fontSize: theme.fs14,
  },
  {
    type: 'text',
    width: '60%',
    color: theme.fc08,
    fontSize: theme.fs14,
  },
];
const btnStyle = [
  {
    color: theme.fc01,
    hBgColor: theme.fc15,
    fontSize: theme.fs13,
    fontWeight: '500',
    padding: '8px 12px',
    radius: '2px',
    width: '120px',
  },
  {
    color: theme.fc14,
    hColor: theme.fc14,
    bgColor: theme.bg06,
    hBgColor: theme.bg06,
    border: `0.5px solid ${theme.ls06}`,
    hBorder: `0.5px solid ${theme.ls11}`,
    fontSize: theme.fs13,
    fontWeight: '500',
    padding: '8px 12px',
    radius: '2px',
    width: '120px',
  },
];
