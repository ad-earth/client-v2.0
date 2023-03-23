import React, { useMemo } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import useGetDetailQuery from '../query/useGetDetailQuery';
import { useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/cartOptionModal.style';
import Button from './common/Button';
import Option from './common/Option';

type TProps = {
  onClose: () => void;
};

const isCartModal = true;
export default function CartOptionModal({ onClose }: TProps) {
  const productNo = useAppSelector(state => state.cartSlice.productNo);

  const query = useGetDetailQuery(productNo, null);
  const { product } = useMemo(
    () => ({
      product: query.data?.data.product,
    }),
    [query]
  );

  console.log('product: ', product);
  return (
    <t.Container>
      <t.InfoHead>
        옵션 변경
        <IoCloseOutline className="close" onClick={onClose} />
      </t.InfoHead>
      <t.Content>
        <t.ProdInfo>
          <img src={product && product.p_Thumbnail[0]} alt="thumbnail" />
          <t.ProdDesc>
            [{product && product.a_Brand}] {product && product.p_Name}
            <span>{product && product.p_Cost}원</span>
          </t.ProdDesc>
        </t.ProdInfo>
        <Option product={product} isCartModal={isCartModal} />
        <t.BtnWrapper>
          <Button text="취소" {...btnStyle[0]} />
          <Button text="변경" {...btnStyle[1]} />
        </t.BtnWrapper>
      </t.Content>
    </t.Container>
  );
}
const btnStyle = [
  {
    width: '49%',
    fontWeight: '400',
    radius: '30px',
    border: `0.5px solid ${theme.ls03}`,
    bgColor: `${theme.bg01}`,
    color: `${theme.fc14}`,
    hColor: `${theme.fc14}`,
    hBorder: `0.5px solid ${theme.ls03}`,
    hBgColor: `${theme.bg01}`,
  },
  {
    width: '49%',
    fontWeight: '400',
    radius: '30px',
  },
];
