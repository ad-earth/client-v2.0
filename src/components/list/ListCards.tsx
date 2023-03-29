import Pagination from '../../elements/Pagination';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/listCards.style';
import ListCardGrid from './ListCardGrid';
import ListSelect from './ListSelect';

type TProps = {
  totalPages: number;
  products: IProductCard[];
  likeList: number[];
};

function ListCards({ totalPages, products, likeList }: TProps) {
  return (
    <t.Container>
      <ListSelect />
      {products?.length === 0 ? (
        <p>등록된 상품이 없습니다.</p>
      ) : (
        <ListCardGrid products={products} likeList={likeList} />
      )}
      <Pagination pageCnt={totalPages} />
    </t.Container>
  );
}

export default ListCards;
