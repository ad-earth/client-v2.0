import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import theme from '../../shared/style/theme';
import * as t from '../../style/address.style';
interface IProps {
  zipcode: string;
  address: string;
  extraAddress: string;
  setZipcode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setExtraAddress: Dispatch<SetStateAction<string>>;
  isNewAddress?: boolean;
}

function Address({
  zipcode,
  address,
  extraAddress,
  setZipcode,
  setAddress,
  setExtraAddress,
  isNewAddress,
}: IProps) {
  const [isUser, setIsUser] = useState<boolean>(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let plusAddress = '';
    let code = data.zonecode;
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        plusAddress += data.bname;
      }
      if (data.buildingName !== '') {
        plusAddress +=
          plusAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += plusAddress !== '' ? ` (${plusAddress})` : '';
    }
    setZipcode(code);
    setAddress(fullAddress);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    open({ onComplete: handleComplete });
  };
  const handleChange = (value: string) => {
    setZipcode(value);
    setAddress(value);
  };
  const handleExtra = (value: string) => {
    setExtraAddress(value);
  };

  useEffect(() => {
    if (!isUser && !isNewAddress && userInfo) {
      setZipcode(userInfo?.u_Address1);
      setAddress(userInfo?.u_Address2);
      setExtraAddress(userInfo?.u_Address3);
    }
    setIsUser(true);
  }, [!isUser]);

  return (
    <t.Container>
      <t.PostWrap>
        <Input
          value={zipcode}
          holderName="우편번호"
          width="30%"
          color={theme.fc14}
          onChange={e => handleChange(e.target.value)}
        />
        <Button {...btnProps} onClick={handleClick} />
      </t.PostWrap>
      <Input
        value={address}
        holderName="주소"
        color={theme.fc14}
        onChange={e => handleChange(e.target.value)}
      />
      <Input
        value={extraAddress}
        holderName="상세주소"
        color={theme.fc14}
        onChange={e => handleExtra(e.target.value)}
      />
    </t.Container>
  );
}

export default Address;

const btnProps = {
  text: '주소찾기',
  width: '20%',
  fontSize: `${theme.fs13}`,
  bgColor: `${theme.bg01}`,
  hBgColor: `${theme.bg08}`,
  color: `${theme.fc13}`,
  border: `2px solid ${theme.ls03}`,
  hBorder: `2px solid ${theme.ls03}`,
  margin: '0 0 0 20px',
};
