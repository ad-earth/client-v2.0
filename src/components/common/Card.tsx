import * as t from '../../style/card.style';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../shared/types/types';
import Badge from './Badge';
import Heart from './Heart';

const Card = ({ list, likeList }: PropsType) => {
  const navigate = useNavigate();
  const [image, setImage] = useState<[number, boolean]>([null, false]);

  const handleClick = (productNo: number) => navigate(`/detail/${productNo}`);

  return (
    <>
      {list?.map((product, idx) => (
        <t.Container key={product.p_No}>
          <div onClick={() => handleClick(product.p_No)}>
            <t.Thumbnail
              onMouseEnter={() => setImage([idx, true])}
              onMouseLeave={() => setImage(prev => prev)}
              src={
                product.p_Thumbnail[
                  image[0] === idx && image[1] && product.p_Thumbnail.length > 1
                    ? 1
                    : 0
                ]
              }
            />
            <section>
              {product.p_Option.map(opt =>
                opt[1] ? <t.Color key={opt[1]} code={opt[1]} /> : null
              )}
            </section>
            <t.Name>
              [{product.a_Brand}] {product.p_Name}
            </t.Name>
            <t.Price>
              {(product.p_Cost * (1 - product.p_Discount / 100)).toLocaleString(
                'ko-KR'
              )}
              원
              <span>
                {product.p_Discount !== 0 &&
                  `${product.p_Cost.toLocaleString('ko-KR')}원`}
              </span>
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
                likeCnt={product.p_Like}
                productNo={product.p_No}
                likeList={likeList}
              />
            )}
          </section>
        </t.Container>
      ))}
    </>
  );
};

type PropsType = {
  list: ProductType[];
  likeList?: number[];
};

export default Card;
