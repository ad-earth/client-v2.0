import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PayDrop from '../components/common/PayDrop';
import PaymentInput from '../components/PaymentInput';
import useGetPaymentQuery from '../query/userGetPaymentQuery';
import theme from '../shared/style/theme';
import * as t from '../style/paymentPage.style';

export default function PaymentPage() {
  const [newUser, setNewUser] = useState<boolean>(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState<boolean>(false);
  const handleNewUser = () => setNewUser(true);
  const handleOpen = () => setIsOpenDelivery(true);
  const {
    state: { type, productNo },
  } = useLocation();
  const query = useGetPaymentQuery(type, productNo);
  const { data } = useMemo(
    () => ({
      data: query.data?.data,
    }),
    [query]
  );
  console.log(data);
  return (
    <t.Container>
      <t.Payment>
        <h1>결제하기</h1>
        <t.Section>
          <section>
            <article>
              <h2>주문 상품 정보</h2>
              <t.Temp />
            </article>
            <article>
              <h2>주문자 정보</h2>
              <t.Content>
                {!newUser ? (
                  <>
                    <t.TextArea>
                      <t.Text>이름</t.Text>
                      <t.TextGray>010-1234-1234</t.TextGray>
                    </t.TextArea>
                    <Button
                      {...btnStyle[0]}
                      text="수정"
                      onClick={handleNewUser}
                    />
                  </>
                ) : (
                  <t.InputArea>
                    <Input {...inputStyle[0]} />
                    <Input {...inputStyle[1]} />
                  </t.InputArea>
                )}
              </t.Content>
            </article>
            <article>
              <h2>배송 정보</h2>
              <t.Content>
                {!isOpenDelivery ? (
                  <>
                    <t.TextArea>
                      <t.Text>이름</t.Text>
                      <t.TextGray>010-1234-1234</t.TextGray>
                      <t.TextGray>기본 주소, 추가 주소</t.TextGray>
                      <t.TextGray>(우편번호)</t.TextGray>
                    </t.TextArea>
                    <Button {...btnStyle[0]} text="변경" onClick={handleOpen} />
                  </>
                ) : (
                  <PaymentInput />
                )}
              </t.Content>
              <h4>배송메모</h4>
              <PayDrop delivery={delivery} />
            </article>
          </section>
          <section>
            <article>
              <h2>주문 요약</h2>
              <t.Content>
                <t.TextGray>상품가격</t.TextGray>
                <t.Text>7,000원</t.Text>
              </t.Content>
              <t.Content>
                <t.TextGray>배송비</t.TextGray>
                <t.Text>+ 0원</t.Text>
              </t.Content>
              <hr />
              <t.Content>
                <t.TextGray>총 주문 금액</t.TextGray>
                <t.Text>7,000원</t.Text>
              </t.Content>
            </article>
            <article>
              <h2>결제 수단</h2>
              <t.CheckBox>
                <t.Radio type="radio" defaultChecked />
                <label>무통장입금</label>
              </t.CheckBox>
              <PayDrop payment={payment} />
              <Input {...inputStyle[2]} />
              <h4>※ 주문 후 24시간동안 미입금시 자동취소됩니다.</h4>
              <hr />
              <t.CheckBox>
                <t.CheckInput type="checkbox" id="receipt" />
                <label htmlFor="receipt">현금영수증 신청</label>
              </t.CheckBox>
            </article>
            <article>
              <t.CheckBox>
                <t.CheckInput type="checkbox" id="agree" />
                <label htmlFor="agree">전체동의</label>
              </t.CheckBox>
              <t.CheckBox>
                <p>↳</p>
                <t.CheckInput type="checkbox" id="agreeCheck" />
                <label htmlFor="agreeCheck">구매조건 확인 및 결제에 동의</label>
              </t.CheckBox>
              <Button {...btnStyle[1]} />
            </article>
          </section>
        </t.Section>
      </t.Payment>
    </t.Container>
  );
}
const btnStyle = [
  {
    color: theme.fc01,
    hBgColor: theme.fc15,
    fontSize: theme.fs13,
    fontWeight: '500',
    padding: '6px 12px',
    radius: '2px',
    width: '50px',
  },
  {
    color: theme.fc01,
    hBgColor: theme.fc15,
    fontSize: theme.fs16,
    fontWeight: '600',
    padding: '8px 12px',
    radius: '2px',
    width: '100%',
    text: '결제하기',
  },
];
const inputStyle = [
  {
    holderName: '이름',
    color: theme.fc08,
    fontSize: theme.fs14,
    width: '49%',
  },
  {
    holderName: '연락처',
    color: theme.fc08,
    fontSize: theme.fs14,
    width: '49%',
  },
  {
    holderName: '입금자명',
    color: theme.fc08,
    fontSize: theme.fs16,
    width: '100%',
    padding: '10px 20px',
    marginTop: '10px',
  },
];
const delivery = [
  {
    text: '배송 전에 미리 연락바랍니다.',
  },
  {
    text: '부재시 경비실에 맡겨주세요.',
  },
  {
    text: '부재시 문자나 전화를 남겨주세요.',
  },
];
const payment = [{ text: '지구은행 123456789 (주)광고지구' }];
