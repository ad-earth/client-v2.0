import { useState } from 'react';
import theme from '../shared/style/theme';
import * as t from '../style/paymentInput.style';
import Address from './common/Address';
import Input from './common/Input';

export default function PaymentInput() {
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const handleOpenSelect = () => setIsSelect(false);
  const handleOpenInput = () => setIsSelect(true);
  return (
    <t.Container>
      <t.Tap>
        <p onClick={handleOpenSelect}>배송지 선택</p>
        <p onClick={handleOpenInput}>신규 배송지 입력</p>
      </t.Tap>
      <hr />
      {!isSelect ? (
        <t.ShipList>
          <input type="radio" id="shipping" />
          <t.InfoWrap>
            <label htmlFor="shipping">이름</label>
            <p>010-1234-1234</p>
            <p>기존 주소</p>
            <p>추가 주소</p>
          </t.InfoWrap>
          <p>삭제</p>
        </t.ShipList>
      ) : (
        <>
          <t.InputArea>
            <Input {...inputStyle[0]} />
            <Input {...inputStyle[1]} />
          </t.InputArea>
          <Address
            zipcode={zipcode}
            address={address}
            extraAddress={extraAddress}
            setZipcode={setZipcode}
            setAddress={setAddress}
            setExtraAddress={setExtraAddress}
          />
        </>
      )}
    </t.Container>
  );
}
const inputStyle = [
  {
    holderName: '주문자명',
    color: theme.fc08,
    fontSize: theme.fs14,
  },
  {
    holderName: '연락처',
    color: theme.fc08,
    fontSize: theme.fs14,
  },
];
