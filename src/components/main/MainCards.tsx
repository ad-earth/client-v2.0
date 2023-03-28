import React from 'react';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/mainProducts.style';
import Card from '../common/Card';

type TProps = {
  list: IProductCard[];
};

export default function MainCards({ list }: TProps) {
  return (
    <t.CardWrapper>
      {list?.map(el => (
        <Card key={el.p_No} product={el} isAd={false} />
      ))}
    </t.CardWrapper>
  );
}
