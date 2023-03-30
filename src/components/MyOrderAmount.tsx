import useViewport from '../hooks/useViewport';
import * as t from '../style/MyOrderAmount.style';

type Tprops = {
  price: number;
  cancelPrice?: number;
};

export default function MyOrderAmount(props: Tprops) {
  const { cancelPrice, price } = props;
  const viewport = useViewport();
  return (
    <t.OrderAmountBox>
      <t.Title>{!cancelPrice ? '주문 금액 상세' : '취소 금액 상세'}</t.Title>
      <t.Contents>
        <t.Section>
          <t.Box className="topText">
            <t.Text>{!cancelPrice ? '주문금액' : '취소 주문금액'}</t.Text>
            <t.Text className="bigText">
              {!cancelPrice
                ? `${price.toLocaleString('ko-KR')}원`
                : `${cancelPrice.toLocaleString('ko-KR')}원`}
            </t.Text>
          </t.Box>
          <t.ItemBox>
            <t.Box>
              <t.Text>{viewport <= 990 ? 'ㄴ 상품 금액' : '상품 금액'}</t.Text>
              <t.Text>
                {!cancelPrice
                  ? `${price.toLocaleString('ko-KR')}원`
                  : `${cancelPrice.toLocaleString('ko-KR')}원`}
              </t.Text>
            </t.Box>
            <t.Box>
              <t.Text>{viewport <= 990 ? 'ㄴ 배송비' : '배송비'}</t.Text>
              <t.Text>0원</t.Text>
            </t.Box>
          </t.ItemBox>
        </t.Section>
        <t.Section>
          <t.IconBox className="left">&#00;-&#08;</t.IconBox>
          <t.Box className="topText">
            <t.Text>{!cancelPrice ? '할인금액' : '차감금액'}</t.Text>
            <t.Text className="bigText">0원</t.Text>
            <t.IconBox className="right"> &#61;</t.IconBox>
          </t.Box>
        </t.Section>
        <t.Section>
          <t.Box className="topText">
            <t.Text>{!cancelPrice ? '총 주문금액' : '환불금액'}</t.Text>
            <t.Text className="bigText green">
              {!cancelPrice
                ? `${price.toLocaleString('ko-KR')}원`
                : `${cancelPrice.toLocaleString('ko-KR')}원`}
            </t.Text>
          </t.Box>
        </t.Section>
      </t.Contents>
    </t.OrderAmountBox>
  );
}
