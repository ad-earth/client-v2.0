import React, { useEffect, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
import { shallowEqual } from 'react-redux';
import Button from '../elements/Button';
import ErrMsg from '../elements/ErrorMsg';
import Input from '../elements/Input';
import {
  setAddress1,
  setAddress2,
  setAddress3,
  setDNumber,
  setName,
  setPayInfo,
  setPhone,
} from '../redux/reducer/payInputSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

import theme from '../shared/style/theme';
import { PayInputInitial } from '../shared/utils/inputInitialValue';
import { PayReducer } from '../shared/utils/inputReducer';
import * as t from '../style/paymentInput.style';
import Address from './common/Address';
import type { TUser } from './PaymentAddDefault';

type TProps = {
  isTabOpen: boolean;
};

export default function PaymentAddNew(isTabOpen: TProps) {
  const dispatch = useAppDispatch();
  const memo = useAppSelector(
    state => state.payInputSlice.d_Memo,
    shallowEqual
  );
  const [states, setDispatch] = useReducer(PayReducer, PayInputInitial);
  const { name, phone } = states;
  const [newUser, setNewUser] = useState<TUser>();
  const [zipcode, setZipcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [extraAddress, setExtraAddress] = useState<string>('');
  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });

  const handleClick = () => {
    if (!newUser.d_Name && !newUser.d_Phone) setDispatch({ type: 'reset' });
    else if (zipcode && address && extraAddress) {
      dispatch(setName(newUser?.d_Name));
      dispatch(setPhone(newUser?.d_Phone));
      dispatch(setDNumber(0));
      dispatch(setAddress1(zipcode));
      dispatch(setAddress2(address));
      dispatch(setAddress3(extraAddress));
      setAllChecked(true);
    } else toast.error('입력칸을 모두 채워주세요!');
  };

  useEffect(() => {
    if (!states) return;
    setNewUser({
      d_Name: name.val,
      d_Phone: phone.val,
    });
  }, [name.val, phone.val]);

  useEffect(() => {
    if (isTabOpen && !allChecked) {
      dispatch(
        setPayInfo({
          d_No: null,
          d_Name: '',
          d_Phone: '',
          d_Address1: '',
          d_Address2: '',
          d_Address3: '',
          d_Memo: memo && memo,
        })
      );
    }
  }, [isTabOpen]);

  useEffect(() => {
    if (!isNewAddress) setIsNewAddress(true);
  }, []);

  return (
    <>
      <t.InputArea onSubmit={handleSubmit}>
        <Input
          {...inputStyle}
          holderName="주문자명"
          name="name"
          value={name.val}
          onChange={onChange}
        />
        <Input
          {...inputStyle}
          holderName="연락처"
          name="phone"
          value={phone.val}
          onChange={onChange}
        />
      </t.InputArea>
      {!name.isCheck && <ErrMsg msg={name.msg} />}
      {!phone.isCheck && <ErrMsg msg={phone.msg} />}
      <Address
        zipcode={zipcode}
        address={address}
        extraAddress={extraAddress}
        setZipcode={setZipcode}
        setAddress={setAddress}
        setExtraAddress={setExtraAddress}
        isNewAddress
      />
      <Button {...btnStyle} text="새 주소 입력" onClick={handleClick} />
      {allChecked && <t.TextGreen>새 주소가 입력되었습니다!</t.TextGreen>}
    </>
  );
}
const inputStyle = {
  type: 'text',
  color: theme.fc08,
  fontSize: theme.fs14,
};
const btnStyle = {
  color: theme.fc01,
  hBgColor: theme.fc15,
  fontSize: theme.fs13,
  fontWeight: '500',
  padding: '8px 12px',
  radius: '2px',
  width: '100px',
  margin: '15px 0 0 0',
};
