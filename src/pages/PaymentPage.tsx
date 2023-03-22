import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import PayDrop from '../components/common/PayDrop';
import type { PropsType } from '../components/common/ProductCard';
import ProductCard from '../components/common/ProductCard';
import PaymentInput from '../components/PaymentInput';
import useGetPaymentQuery from '../query/userGetPaymentQuery';
import { setPayInfo } from '../redux/reducer/payInputSlice';
import { useAppDispatch } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/paymentPage.style';

export default function PaymentPage() {
  // 결제페이지 조회
  const {
    state: { type, productNo },
  } = useLocation();
  const query = useGetPaymentQuery(type, productNo);
  const { userInfo, addressList, products, price } = useMemo(
    () => ({
      userInfo: query.data?.data.userInfo,
      addressList: query.data?.data.addressList,
      products: query.data?.data.products,
      price: query.data?.data.o_Price,
    }),
    [query]
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setPayInfo({
        d_No: null,
        d_Name: userInfo?.u_Name,
        d_Phone: userInfo?.u_Phone,
        d_Address1: userInfo?.u_Address1,
        d_Address2: userInfo?.u_Address2,
        d_Address3: userInfo?.u_Address3,
        d_Memo: '배송메모가 없습니다.',
      })
    );
  }, [userInfo]);
  const priceWon = price?.toLocaleString();

  return (
    <t.Container>
      <t.Payment>
        <h1>결제하기</h1>
        <t.Section>
          <section>
            <article>
              <h2>주문 상품 정보</h2>
              {products &&
                products.map((item: PropsType, idx: number) => (
                  <ProductCard
                    key={idx}
                    p_Thumbnail={item.p_Thumbnail}
                    a_Brand={item.a_Brand}
                    p_Name={item.p_Name}
                    p_Option={item.p_Option}
                  />
                ))}
            </article>
            <article>
              <h2>주문자 배송 정보</h2>
              <PaymentInput addressList={addressList} />
            </article>
          </section>
          <section>
            <article>
              <h2>주문 요약</h2>
              <t.Content>
                <t.TextGray>상품가격</t.TextGray>
                <t.Text>{price && priceWon}원</t.Text>
              </t.Content>
              <t.Content>
                <t.TextGray>배송비</t.TextGray>
                <t.Text>+ 0원</t.Text>
              </t.Content>
              <hr />
              <t.Content>
                <t.TextGray>총 주문 금액</t.TextGray>
                <t.Text>{price && priceWon}원</t.Text>
              </t.Content>
            </article>
            <article>
              <h2>결제 수단</h2>
              <t.CheckBox>
                <t.Radio type="radio" defaultChecked />
                <label>무통장입금</label>
              </t.CheckBox>
              <PayDrop payment={payment} />
              <Input {...inputStyle} />
              <h4>※ 주문 후 24시간동안 미입금시 자동취소됩니다.</h4>
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
              <Button {...btnStyle} />
            </article>
          </section>
        </t.Section>
      </t.Payment>
    </t.Container>
  );
}
const btnStyle = {
  color: theme.fc01,
  hBgColor: theme.fc15,
  fontSize: theme.fs16,
  fontWeight: '600',
  padding: '8px 12px',
  radius: '2px',
  width: '100%',
  text: '결제하기',
};
const inputStyle = {
  holderName: '입금자명',
  color: theme.fc08,
  fontSize: theme.fs16,
  width: '100%',
  padding: '10px 20px',
  marginTop: '10px',
};
const payment = [{ text: '지구은행 123456789 (주)광고지구' }];
