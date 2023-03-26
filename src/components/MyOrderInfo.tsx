import useViewport from '../hooks/useViewport';
import type { IList } from '../shared/types/types';
import * as t from '../style/myOrderInfo.style';

export default function MyOrderInfo({ list }: { list: IList }) {
  const viewport = useViewport();
  return (
    <t.TopInfo>
      <t.OrderNumberBox>
        <t.Label> 주문번호 </t.Label>
        <t.ProductLink to={`${list.o_No}`} className="link">
          <t.OrderNumber>
            {viewport > 990 ? `${list.o_No}` : '주문상세보기'}
          </t.OrderNumber>
          <t.ArrowIcon />
        </t.ProductLink>
      </t.OrderNumberBox>
      <t.DateBox>
        <t.Label> 주문일자 </t.Label>
        <t.Date>{list.o_Date}</t.Date>
      </t.DateBox>
    </t.TopInfo>
  );
}
