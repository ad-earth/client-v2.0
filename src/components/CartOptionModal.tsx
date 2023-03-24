import React, { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';
import useGetDetailQuery from '../query/useGetDetailQuery';
import usePutCartQuery from '../query/usePutCartQuery';
import { setOptions } from '../redux/reducer/optionSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/cartOptionModal.style';
import Button from './common/Button';
import Option from './common/Option';

type TProps = {
  onClose: () => void;
};

export default function CartOptionModal({ onClose }: TProps) {
  const dispatch = useAppDispatch();
  const productNo = useAppSelector(state => state.cartSlice.productNo);
  const keywordNo = useAppSelector(state => state.cartSlice.keywordNo);
  const optionFromSlice = useAppSelector(state => state.optionSlice);
  const options = JSON.parse(localStorage.getItem('option'));
  const qty = localStorage.getItem('qty');

  useEffect(() => {
    dispatch(setOptions(options));
  }, []);

  const query = useGetDetailQuery(productNo, null);
  const { product } = useMemo(
    () => ({
      product: query.data?.data.product,
    }),
    [query]
  );

  const cartData = {
    type: 'c',
    productNo: productNo,
    option: optionFromSlice,
    keyword: keywordNo,
  };
  const { mutate: cartMutate } = usePutCartQuery();
  const handleCart = () => {
    if (product && optionFromSlice.length === 0)
      toast.error('상품을 먼저 선택해주세요.');
    else {
      cartMutate(cartData, {
        onSuccess: () => {
          const acc = localStorage.getItem('cartStatus');
          const cur = Number(acc) + 1;
          localStorage.setItem('cartStatus', String(cur));
          onClose();
        },
      });
    }
  };

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
        <Option
          product={product}
          isCartModal={true}
          isCart={true}
          qty={Number(qty)}
        />
        <t.BtnWrapper>
          <Button text="취소" {...btnStyle[0]} onClick={onClose} />
          <Button text="변경" {...btnStyle[1]} onClick={handleCart} />
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
