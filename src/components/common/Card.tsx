import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../../elements/Badge';
import Heart from '../../elements/Heart';
import type { IProductCard } from '../../shared/types/types';
import * as t from '../../style/card.style';

type TProps = {
  product: IProductCard;
  isAd: boolean;
  likeList?: number[];
  keyword?: string;
};

export default function Card({ product, isAd, likeList, keyword }: TProps) {
  const navigate = useNavigate();
  const [imageIdx, setImageIdx] = useState<number>(0);

  const handleClick = (productNo: number) => {
    navigate(`/detail/${productNo}?keyword=${keyword}&page=1`);
  };

  const handleEnter = () =>
    product.p_Thumbnail.length > 1 ? setImageIdx(1) : setImageIdx(0);
  const handleLeave = () => setImageIdx(0);

  const { price, discountedPrice } = useMemo(
    () => ({
      price: product.p_Cost.toLocaleString('ko-KR'),
      discountedPrice: (
        product.p_Cost *
        (1 - product.p_Discount / 100)
      ).toLocaleString('ko-KR'),
    }),
    [product]
  );

  return (
    <>
      <t.Container key={product.p_No}>
        <div onClick={() => handleClick(product.p_No)}>
          <t.ImgWrapper>
            <t.Thumbnail
              isAd={isAd}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              src={product.p_Thumbnail[imageIdx]}
              alt="상품 사진"
              loading="lazy"
            />
            {isAd && <Badge type={'AD'} />}
          </t.ImgWrapper>
          <section>
            {product.p_Option?.map(opt =>
              opt[1] ? <t.Color key={opt[1]} code={opt[1]} /> : null
            )}
          </section>
          <t.Name>
            [{product.a_Brand}] {product.p_Name}
          </t.Name>
          <t.Price>
            {discountedPrice}원
            <span>{product.p_Discount > 0 && `${price}원`}</span>
          </t.Price>
          <section>
            {product.p_Best && <Badge type={'BEST'} />}
            {product.p_New && <Badge type={'NEW'} />}
            {product.p_Sale && <Badge type={'SALE'} />}
            {product.p_Soldout && <Badge type={'SOLDOUT'} />}
          </section>
        </div>
        <section>
          {product.p_Review >= 0 && (
            <section>
              <t.BubbleIcon />
              <t.Count>{product.p_Review}</t.Count>
            </section>
          )}
          {product.p_Like >= 0 && (
            <Heart
              likeCnt={product?.p_Like}
              productNo={product?.p_No}
              likeList={likeList}
            />
          )}
        </section>
      </t.Container>
    </>
  );
}
