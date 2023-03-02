import * as t from '../../style/card.style';

import React from 'react';
import { ProductType } from '../../shared/types/types';
import Badge from './Badge';

const Card = ({ list }: PropsType) => {
  return (
    <>
      {list?.map(product => (
        <t.Container>
          <t.Thumbnail src={product.p_Thumbnail[0]} />
          <section>
            {product.p_Option.map(opt =>
              opt[1] ? <t.Color key={opt[1]} code={opt[1]} /> : null
            )}
          </section>
          <t.Name>
            [{product.a_Brand}] {product.p_Name}
          </t.Name>
          <t.Price>
            {(product.p_Cost * (1 - product.p_Discount / 100)).toLocaleString(
              'ko-KR'
            )}
            원
            <span>
              {product.p_Discount !== 0 &&
                `${product.p_Cost.toLocaleString('ko-KR')}원`}
            </span>
          </t.Price>
          <section>
            {product.p_Best && <Badge type={'BEST'} />}
            {product.p_New && <Badge type={'NEW'} />}
            {product.p_Sale && <Badge type={'SALE'} />}
            {product.p_Soldout && <Badge type={'SOLDOUT'} />}
          </section>
          {product.p_Review && (
            <>
              <t.MessageIcon />
              <t.Count>1</t.Count>
            </>
          )}
          {product.p_Like && (
            <>
              <t.HeartIcon />
              <t.Count>1</t.Count>
            </>
          )}
        </t.Container>
      ))}
    </>
  );
};

type PropsType = {
  list: ProductType[];
};

export default Card;
