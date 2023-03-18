import CartItem from '../components/CartItem';
import Button from '../components/common/Button';
import useViewport from '../hooks/useViewport';
import theme from '../shared/style/theme';
import * as t from '../style/cartPage.style';

export default function CartPage() {
  const viewport = useViewport();
  return (
    <t.Container>
      <t.CartHead>
        <p>장바구니</p>
        <t.CountBadge>1</t.CountBadge>
      </t.CartHead>
      <t.ListWrap>
        <t.ListHead>
          <t.CheckBox type="checkbox" />
          <t.ListInfo className="large">
            {viewport >= 990 ? '상품정보' : '전체선택'}
          </t.ListInfo>
          <t.ListInfo className="mid">수량</t.ListInfo>
          <t.ListInfo className="mid">주문금액</t.ListInfo>
          <t.ListInfo className="small">배송정보</t.ListInfo>
        </t.ListHead>
        <CartItem />
        <CartItem />
        <CartItem />
        <t.BtnWrap>
          <Button {...btnStyle[0]} text="선택상품 삭제" />
          <Button {...btnStyle[0]} text="품절상품 삭제" />
        </t.BtnWrap>
        <t.Receipt>
          <t.ReceiptHead>
            총 주문 상품 <span>2</span>개
          </t.ReceiptHead>
          <t.ReceiptPrice>
            <t.Price>
              16,400원<span>상품금액</span>
            </t.Price>
            <t.Price>+</t.Price>
            <t.Price>
              0원<span>배송비</span>
            </t.Price>
            <t.Price>=</t.Price>
            <t.Price className="total">
              16,400원<span>총 주문금액</span>
            </t.Price>
          </t.ReceiptPrice>
        </t.Receipt>
        <Button {...btnStyle[1]} />
        <a href="/">계속 쇼핑하기</a>
      </t.ListWrap>
    </t.Container>
  );
}

const btnStyle = [
  {
    width: '96px',
    fontWeight: 'normal',
    radius: '30px',
    border: `0.5px solid ${theme.ls03}`,
    bgColor: theme.bg01,
    color: theme.fc14,
    hBorder: `0.5px solid ${theme.ls11}`,
    hBgColor: theme.bg07,
    hColor: theme.fc14,
    margin: '30px auto',
  },
  {
    text: '주문하기',
    width: '30%',
    fontSize: theme.fc16,
    radius: '30px',
    padding: '16px 0',
    margin: '50px auto',
  },
];
