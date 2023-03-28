import React from 'react';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/mainProducts.style';
import Card from '../common/Card';

type TProps = {
  list: IProductCard[];
  children: React.ReactNode;
};

function MainProducts({ list, children }: TProps) {
  return (
    <t.Container>
      <t.TitleWrapper>
        <t.Title>{children}</t.Title>
        <t.Image>
          <img src={list && list[0].p_Thumbnail[0]} alt="베스트 상품" />
        </t.Image>
      </t.TitleWrapper>
      <t.CardWrapper>
        {list?.map(el => (
          <Card key={el.p_No} product={el} isAd={false} />
        ))}
      </t.CardWrapper>
    </t.Container>
  );
}

export default MainProducts;
