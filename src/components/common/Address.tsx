import * as t from '../../style/address.style';
import theme from '../../shared/style/theme';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Input from './Input';
import Button from './Button';

export interface PropsType {
  zipcode: string;
  address: string;
  extraAddress: string;
  setZipcode: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setExtraAddress: Dispatch<SetStateAction<string>>;
}

const Address = ({
  zipcode,
  address,
  extraAddress,
  setZipcode,
  setAddress,
  setExtraAddress,
}: PropsType) => {
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

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const changeHandler = (value: string) => {
    setZipcode(value);
    setAddress(value);
  };

  const extraHandler = (value: string) => {
    setExtraAddress(value);
  };

  useEffect(() => {
    if (userInfo?.u_Address1) {
      setZipcode(userInfo.u_Address1);
    }
    if (userInfo?.u_Address2) {
      setAddress(userInfo.u_Address2);
    }
    if (userInfo?.u_Address3) {
      setExtraAddress(userInfo.u_Address3);
    }
  }, [userInfo]);

  return (
    <t.Container>
      <t.PostWrap>
        <Input
          value={zipcode}
          holderName="우편번호"
          width="30%"
          color={theme.fc14}
          onChange={e => changeHandler(e.target.value)}
        />
        <Button {...btnProps} onClick={handleClick} />
      </t.PostWrap>
      <Input
        value={address}
        holderName="주소"
        color={theme.fc14}
        onChange={e => changeHandler(e.target.value)}
      />
      <Input
        value={extraAddress}
        holderName="상세주소"
        color={theme.fc14}
        onChange={e => extraHandler(e.target.value)}
      />
    </t.Container>
  );
};

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
