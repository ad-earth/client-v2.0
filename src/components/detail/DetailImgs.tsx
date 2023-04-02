import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CAROUSEL } from '../../constants';
import type { IProductDetail } from '../../shared/types/types';
import * as t from '../../style/detailImgs.style';

type TProps = {
  product: IProductDetail;
};

function DetailImgs({ product }: TProps) {
  return (
    <t.MainContainer>
      <Slider {...CAROUSEL}>
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
}

export default DetailImgs;
