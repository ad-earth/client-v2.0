import React, { Suspense } from 'react';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/mainProducts.style';
import SkeletonCard from '../common/SkeletonCard';
const MainCards = React.lazy(() => import('./MainCards'));

type TProps = {
  list: IProductCard[];
  children: React.ReactNode;
};

export default function MainProducts({ list, children }: TProps) {
  const productImg = list && list[0].p_Thumbnail[0];

  return (
    <t.Container>
      <t.TitleWrapper>
        <t.Title>{children}</t.Title>
        <t.Image>
          <img src={productImg} alt="대표 상품" />
        </t.Image>
      </t.TitleWrapper>
      <Suspense
        fallback={
          <t.CardWrapper>
            <SkeletonCard />
          </t.CardWrapper>
        }
      >
        <MainCards list={list} />
      </Suspense>
    </t.Container>
  );
}
