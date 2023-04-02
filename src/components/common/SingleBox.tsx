import { useEffect, useMemo, useState } from 'react';
import { setOptions } from '../../redux/reducer/optionSlice';
import { useAppDispatch } from '../../redux/store';
import type { IProductDetail } from '../../shared/types/types';
import * as t from '../../style/box.style';

type TProps = {
  product: IProductDetail;
  isCart: boolean;
  qty?: number;
};
export default function SingleBox({ product, isCart, qty }: TProps) {
  const dispatch = useAppDispatch();
  const [totalQty, setTotalQty] = useState<number>(1);
  const addQty = () => setTotalQty(prev => prev + 1);
  const substractQty = () => setTotalQty(prev => prev - 1);

  const price = useMemo(
    () =>
      product?.p_Discount
        ? product?.p_Cost * (1 - product?.p_Discount / 100)
        : product?.p_Cost,
    [product]
  );

  const totalPrice = useMemo(
    () => (price * totalQty).toLocaleString('ko-kr'),
    [price, totalQty]
  );

  useEffect(() => {
    if (isCart) setTotalQty(qty);
  }, [isCart, qty]);

  useEffect(() => {
    dispatch(setOptions([[null, null, null, 0, totalQty, price * totalQty]]));
  }, [totalQty]);

  return (
    <t.Container>
      <t.OptBox>
        <t.Wrapper>수량</t.Wrapper>
        <t.BtnWrapper>
          <t.Button onClick={substractQty}>-</t.Button>
          <t.Qty>{totalQty}</t.Qty>
          <t.Button className="plus" onClick={addQty}>
            +
          </t.Button>
        </t.BtnWrapper>
      </t.OptBox>
      <t.Wrapper className="price">
        총 상품 금액({totalQty}개)
        <span>{totalPrice}원</span>
      </t.Wrapper>
    </t.Container>
  );
}
