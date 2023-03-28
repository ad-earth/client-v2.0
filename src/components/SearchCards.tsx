import type { Dispatch, SetStateAction } from 'react';
import Pagination from '../elements/Pagination';
import type { IProductCard } from '../shared/types/types';
import * as t from '../style/listCards.style';
import Card from './common/Card';

type PropsType = {
  pageCnt: number;
  ads: IProductCard[];
  products: IProductCard[];
  likeList: number[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

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

export default SearchCards;
