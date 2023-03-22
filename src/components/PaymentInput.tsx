import React, { useEffect, useState } from 'react';
import useDeletePaymentAddressQuery from '../query/useDeletePaymentAddressQuery';
import { setName, setPayInfo, setPhone } from '../redux/reducer/payInputSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/paymentInput.style';
import Address from './common/Address';
import Button from './common/Button';
import Input from './common/Input';
import PayDrop from './common/PayDrop';

type TAddressList = {
  d_No: number;
  u_Idx: number;
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
  d_Memo?: string;
};
type TTab = {
  id: string;
  title: string;
};
type TUser = { d_Name: string; d_Phone: string };

export default function PaymentInput({
  addressList,
}: {
  addressList: TAddressList[];
}) {
  const [zipcode, setZipcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [extraAddress, setExtraAddress] = useState<string>('');

  const dispatch = useAppDispatch();
  const payInfo = useAppSelector(state => state.payInputSlice);
  const user = JSON.parse(localStorage.getItem('userInfo'));

  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('default');
  const [isResetUser, setIsResetUser] = useState<boolean>(false);
  const [resetUser, setResetUser] = useState<TUser>({
    d_Name: '',
    d_Phone: '',
  });

  const handleOpenSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === 'default') {
      dispatch(
        setPayInfo({
          d_No: null,
          d_Name: resetUser ? resetUser.d_Name : user?.u_Name,
          d_Phone: resetUser ? resetUser.d_Phone : user?.u_Phone,
          d_Address1: user?.u_Address1,
          d_Address2: user?.u_Address2,
          d_Address3: user?.u_Address3,
          d_Memo: '배송메모가 없습니다.',
        })
      );
    }
    setCurrentTab(target.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetUser({ ...resetUser, [name]: value });
  };
  const handleOpenUser = () => setIsResetUser(!isResetUser);
  const handleReset = () => {
    setIsResetUser(!isResetUser);
    dispatch(setName(resetUser.d_Name));
    dispatch(setPhone(resetUser.d_Phone));
  };

  useEffect(() => {
    if (!isNewAddress) setIsNewAddress(true);
  }, []);

  const { mutate } = useDeletePaymentAddressQuery();
  const handleDelete = (d_No: number) => {
    mutate(d_No, {
      onSuccess: () => {
        alert('이전 배송지 정보를 삭제하였습니다.');
      },
    });
  };

  return (
    <>
      <t.Container>
        <t.Content>
          <t.Tab>
            {tab.map((item, idx: number) => (
              <t.Title
                key={idx}
                id={item.id}
                className={currentTab === item.id ? 'isActive' : 'isNotActive'}
                onClick={handleOpenSelect}
              >
                {item.title}
              </t.Title>
            ))}
          </t.Tab>
          {currentTab === 'default' && payInfo && (
            <>
              <t.TextArea>
                {!isResetUser ? (
                  <>
                    <t.Text>{payInfo.d_Name}</t.Text>
                    <t.TextGray>{payInfo.d_Phone}</t.TextGray>
                  </>
                ) : (
                  <t.InputArea onSubmit={handleSubmit}>
                    <Input
                      {...inputStyle[1]}
                      name="d_Name"
                      holderName="주문자명"
                      value={resetUser.d_Name}
                      onChange={handleChange}
                    />
                    <Input
                      {...inputStyle[2]}
                      name="d_Phone"
                      holderName="연락처"
                      value={resetUser.d_Phone}
                      onChange={handleChange}
                    />
                    <Button {...btnStyle} text="변경" onClick={handleReset} />
                  </t.InputArea>
                )}
                <t.TextGray>
                  {payInfo.d_Address2} {payInfo.d_Address3}
                </t.TextGray>
                <t.TextGray>({payInfo.d_Address1})</t.TextGray>
              </t.TextArea>
              {!isResetUser && (
                <Button {...btnStyle} text="수정" onClick={handleOpenUser} />
              )}
            </>
          )}
          {currentTab === 'before' && (
            <>
              {addressList.map(item => (
                <t.ShipList key={item.d_No}>
                  <input type="radio" id={String(item.d_No)} />
                  <t.InfoWrap>
                    <label htmlFor={String(item.d_No)}>{item.d_Name}</label>
                    <p>{item.d_Phone}</p>
                    <p>{item.d_Address2}</p>
                    <p>{item.d_Address3}</p>
                    <p>({item.d_Address1})</p>
                  </t.InfoWrap>
                  <p onClick={() => handleDelete(item.d_No)}>삭제</p>
                </t.ShipList>
              ))}
            </>
          )}
          {currentTab === 'new' && (
            <>
              <t.InputArea>
                <Input holderName="주문자명" {...inputStyle[0]} />
                <Input holderName="연락처" {...inputStyle[0]} />
              </t.InputArea>
              <Address
                zipcode={zipcode}
                address={address}
                extraAddress={extraAddress}
                setZipcode={setZipcode}
                setAddress={setAddress}
                setExtraAddress={setExtraAddress}
                isNewAddress
              />
            </>
          )}
        </t.Content>
      </t.Container>
      <h4>배송메모</h4>
      <PayDrop delivery={delivery} />
    </>
  );
}
const tab: TTab[] = [
  { id: 'default', title: '기본 배송지' },
  { id: 'before', title: '이전 배송지 선택' },
  { id: 'new', title: '신규 배송지 입력' },
];
const inputStyle = [
  {
    type: 'text',
    color: theme.fc08,
    fontSize: theme.fs14,
  },
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
const btnStyle = {
  color: theme.fc01,
  hBgColor: theme.fc15,
  fontSize: theme.fs13,
  fontWeight: '500',
  padding: '8px 12px',
  radius: '2px',
  width: '50px',
};
const delivery = [
  { text: '배송 전에 미리 연락바랍니다.' },
  { text: '부재시 경비실에 맡겨주세요.' },
  { text: '부재시 문자나 전화를 남겨주세요.' },
];
