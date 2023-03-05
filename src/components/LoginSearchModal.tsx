import * as t from '../style/loginSearchModal.style';
import { useState } from 'react';
import LoginSearchId from './LoginSearchId';
import LoginSearchPwd from './LoginSearchPwd';

const LoginSearchModal = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <t.Container>
      <t.SearchHead>
        {isChecked ? '아이디 찾기' : '비밀번호 찾기'}
        <t.Close />
      </t.SearchHead>
      <t.SearchBody>
        <t.SearchNav>
          <t.CheckedBtn
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            아이디 찾기
          </t.CheckedBtn>
          <t.CheckedBtn
            isChecked={!isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            비밀번호 찾기
          </t.CheckedBtn>
        </t.SearchNav>
        {isChecked ? <LoginSearchId /> : <LoginSearchPwd />}
      </t.SearchBody>
    </t.Container>
  );
};

export default LoginSearchModal;
