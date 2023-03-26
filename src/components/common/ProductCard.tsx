// import { useMemo } from 'react';
import type { TUserOption } from '../../shared/types/types';
import * as t from '../../style/productCard.style';

export type Tprops = {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: TUserOption[];
  p_Cost: number;
  p_Discount: number;
};
export default function ProductCard(props: Tprops) {
  /** Data Filtering */
  // const order = useMemo(() => {
  //   const discount = props.p_Cost * (1 - props.p_Discount / 100);
  //   // const color = props.p_Option.map(option => option[0]);
  //   // const size = props.p_Option.map(option => option[2]);
  //   // const price = props.p_Option.map(
  //   //   option =>
  //   //     option[3] > 0 && option[3] + props.p_Cost * (1 - props.p_Discount / 100)
  //   // );
  //   return discount;
  // }, [props.p_Cost, props.p_Discount, props.p_Option]);

  return (
    <t.ProductInfoBox>
      <t.ProductImg src={props.p_Thumbnail[0]} />
      <t.ProductInfo>
        <t.ProducName>
          [{props.a_Brand}] {props.p_Name}
        </t.ProducName>
        {props.p_Option.map((option, i: number) => (
          <t.ProducOptionBox key={i}>
            <t.ProducOption>
              {`${option[0] !== null ? option[0] : ''}`}
              {`${option[2] !== null && option[0] !== null ? '/' : ''}`}
              {`${option[2] !== null ? option[2] : ''}`}
            </t.ProducOption>
            <t.ProducPrice>
              {option[5].toLocaleString('ko-KR')}원 /{' '}
              {option[4].toLocaleString('ko-KR')}개
            </t.ProducPrice>
          </t.ProducOptionBox>
        ))}
      </t.ProductInfo>
    </t.ProductInfoBox>
  );
}
