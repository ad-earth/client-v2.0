import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/listCards.style';
import Card from '../common/Card';

type TProps = {
  products: IProductCard[];
  likeList: number[];
};

export default function ListCardGrid({ products, likeList }: TProps) {
  return (
    <t.Wrapper>
      {products?.map(el => (
        <Card key={el.p_No} isAd={false} product={el} likeList={likeList} />
      ))}
    </t.Wrapper>
  );
}
