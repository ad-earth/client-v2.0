import React from 'react';
import type { ProductType } from '../shared/types/types';
import * as t from '../style/mainProducts.style';
import Card from './common/Card';

function MainProducts({ list, children }: PropsType) {
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

type PropsType = {
  list: ProductType[];
  children: React.ReactNode;
};

export default MainProducts;
