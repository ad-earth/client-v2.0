import * as t from '../style/cartItem.style';
import theme from '../shared/style/theme';
import Button from './common/Button';
import useViewport from '../hooks/useViewport';

const CartItem = () => {
  const viewport = useViewport();
  let thumb =
    'https://adearth-bucket.s3.ap-northeast-2.amazonaws.com/THUMBNAIL/kitchen44-1.jpeg';
  return (
    <t.Container>
      <t.ProdInfo>
        <t.CheckBox type="checkbox" />
        <img src={thumb} />
        <t.InfoWrap>
          <p>[지구샵] 오리지널고체치약 150정입</p>
          <t.Option>[필수] 중 / 옐로우 - 1개</t.Option>
        </t.InfoWrap>
      </t.ProdInfo>
      {viewport >= 990 ? (
        <>
          <t.DetailInfo className="mid">
            <span>1</span>
            <Button {...BtnStyle[0]} />
          </t.DetailInfo>
          <t.DetailInfo className="mid">
            <p>16,400원</p>
            <Button {...BtnStyle[1]} />
          </t.DetailInfo>
          <t.DetailInfo className="small">
            <span>배송비 무료</span>
          </t.DetailInfo>
        </>
      ) : (
        <t.SmallInfoWrap>
          <t.SmallInfo className="top">
            <p>주문금액</p>
            <p>3,000원</p>
          </t.SmallInfo>
          <t.SmallInfo>
            <p>상품금액 (총 1개)</p>
            <p>3,000원</p>
          </t.SmallInfo>
          <t.SmallInfo>
            <p>배송비</p>
            <p>무료</p>
          </t.SmallInfo>
          <t.SmallInfo>
            <p>배송수단</p>
            <p>택배</p>
          </t.SmallInfo>
          <t.BtnWrap>
            <Button {...BtnStyle[0]} />
            <Button {...BtnStyle[1]} />
          </t.BtnWrap>
        </t.SmallInfoWrap>
      )}
    </t.Container>
  );
};

export default CartItem;

const BtnStyle = [
  {
    text: '옵션/수량 변경',
    width: '106px',
    fontWeight: 'normal',
    radius: '30px',
    color: theme.fc14,
    hColor: theme.fc14,
    bgColor: theme.bg01,
    hBgColor: theme.bg02,
    border: `0.5px solid ${theme.ls03}`,
    hBorder: `0.5px solid ${theme.ls11}`,
  },
  {
    text: '바로구매',
    width: '106px',
    fontWeight: 'normal',
    radius: '30px',
  },
];
