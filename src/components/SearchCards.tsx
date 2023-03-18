
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import type { IProduct } from '../shared/types/types';
import * as t from '../style/listCards.style';
import Card from './common/Card';
import Pagination from './common/Pagination';

function SearchCards({
  pageCnt,
  ads,
  products,
  likeList,
  page,
  setPage,
}: PropsType) {
  return (
    <t.Container>
      {ads?.length === 0 && products?.length === 0 ? (
        <p>검색 상품이 없습니다.</p>
      ) : (
        <t.Wrapper>
          {ads?.map(el => (
            <Card key={el.p_No} isAd={true} product={el} likeList={likeList} />
          ))}
          {products?.map(el => (
            <Card key={el.p_No} isAd={false} product={el} likeList={likeList} />
          ))}
        </t.Wrapper>
      )}
      <Pagination pageCnt={pageCnt} page={page} setPage={setPage} />
    </t.Container>
  );
}

type PropsType = {
  pageCnt: number;
  ads: IProduct[];
  products: IProduct[];
  likeList: number[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export default SearchCards;
