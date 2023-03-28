import type { Dispatch, SetStateAction } from 'react';
import Pagination from '../../elements/Pagination';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/listCards.style';
import ListCardGrid from './ListCardGrid';
import ListSelect from './ListSelect';

type TProps = {
  totalPages: number;
  products: IProductCard[];
  likeList: number[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

function ListCards({ totalPages, products, likeList, page, setPage }: TProps) {
  return (
    <t.Container>
      <ListSelect />
      {products?.length === 0 ? (
        <p>등록된 상품이 없습니다.</p>
      ) : (
        <ListCardGrid products={products} likeList={likeList} />
      )}
      <Pagination pageCnt={totalPages} page={page} setPage={setPage} />
    </t.Container>
  );
}

export default ListCards;
