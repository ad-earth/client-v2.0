import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { shallowEqual } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import PayDrop from '../components/common/PayDrop';
import type { Tprops } from '../components/common/ProductCard';
import ProductCard from '../components/common/ProductCard';
import PaymentInput from '../components/payment/PaymentInput';
import { PAYMENTINFO } from '../constants';
import Button from '../elements/Button';
import Input from '../elements/Input';
import usePayment from '../query/usePayment';
import { setPayInfo } from '../redux/reducer/payInputSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/paymentPage.style';

export default function PaymentPage() {
  const payInfo = useAppSelector(state => state.payInputSlice, shallowEqual);
  const [drop, setDrop] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const {
    state: { type, productNo },
  } = useLocation();
  const { userInfo, addressList, products, price } = usePayment(
    type,
    productNo
  );

  const cartStatus = localStorage.getItem('cartStatus');
  const currStatus = Number(cartStatus) - products?.length;
  const navigate = useNavigate();
  const { postPay } = usePayment();
  const handleBuy = () => {
    if (!payInfo.d_Name && !payInfo.d_Phone)
      toast.error('이름과 연락처를 확인해주세요!');
    else if (!payInfo.d_Address1 && !payInfo.d_Address3)
      toast.error('주소를 확인해주세요!');
    else if (!(drop === '지구은행 123456789 (주)광고지구'))
      toast.error('입금 계좌를 확인해주세요!');
    else if (!isCheck) toast.error('구매동의 의사를 확인해주세요!');
    else {
      const data = {
        type: 'c',
        address: payInfo,
        products: products,
        o_Price: price,
      };
      postPay.mutate(data, {
        onSuccess: () => {
          toast.success('상품 구매에 성공하였습니다 😊');
          localStorage.setItem('cartStatus', String(currStatus));
          navigate('/complete', { state: { price: `${price}` } });
        },
      });
    }
  };

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

  return (
    <t.Container>
      <t.Payment>
        <h1>결제하기</h1>
        <t.Section>
          <section>
            <article>
              <h2>주문 상품 정보</h2>
              {products &&
                products.map((item: Tprops, idx: number) => (
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
                <t.Text>{price && price.toLocaleString()}원</t.Text>
              </t.Content>
              <t.Content>
                <t.TextGray>배송비</t.TextGray>
                <t.Text>+ 0원</t.Text>
              </t.Content>
              <hr />
              <t.Content>
                <t.TextGray>총 주문 금액</t.TextGray>
                <t.Text>{price && price.toLocaleString()}원</t.Text>
              </t.Content>
            </article>
            <article>
              <h2>결제 수단</h2>
              <t.CheckBox>
                <t.Radio type="radio" defaultChecked />
                <label>무통장입금</label>
              </t.CheckBox>
              <PayDrop payment={PAYMENTINFO} drop={drop} setDrop={setDrop} />
              <Input {...inputStyle} defaultValue={payInfo?.d_Name} />
              <h4>※ 주문 후 24시간동안 미입금시 자동취소됩니다.</h4>
            </article>
            <article>
              <t.CheckBox>
                <t.CheckInput
                  type="checkbox"
                  id="agree"
                  checked={isCheck}
                  onChange={() => setIsCheck(!isCheck)}
                />
                <label htmlFor="agree">전체동의</label>
              </t.CheckBox>
              <t.CheckBox>
                <p>↳</p>
                <t.CheckInput
                  type="checkbox"
                  id="agreeCheck"
                  checked={isCheck}
                  readOnly
                />
                <label htmlFor="agreeCheck">구매조건 확인 및 결제에 동의</label>
              </t.CheckBox>
              <Button {...btnStyle} onClick={handleBuy} />
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
