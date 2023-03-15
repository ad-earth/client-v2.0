import * as t from '../style/detailImgs.style';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductDetailType } from '../shared/types/types';

const DetailImgs = ({ product }: PropsType) => {
  return (
    <t.MainContainer>
      <Slider {...carouselSetting}>
        {product?.p_Thumbnail.map((img, idx) => (
          <div key={idx}>
            <t.ProdImg src={img} alt="상품 이미지" />
            <t.Page>
              {idx + 1}/{product?.p_Thumbnail.length}
            </t.Page>
          </div>
        ))}
      </Slider>
    </t.MainContainer>
  );
};

type PropsType = {
  product: ProductDetailType;
};

const carouselSetting = {
  autoplaySpeed: 3000,
  autoplay: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default DetailImgs;
