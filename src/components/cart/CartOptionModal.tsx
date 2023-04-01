import React, { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../../elements/Button';
import useCart from '../../query/useCart';
import useGetDetailQuery from '../../query/useGetDetailQuery';
import { setOptions } from '../../redux/reducer/optionSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import theme from '../../shared/style/theme';
import * as t from '../../style/cartOptionModal.style';
import Option from '../common/Option';
interface IProps {
  onClose: () => void;
}

export default function CartOptionModal({ onClose }: IProps) {
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

  const { updateCartItem } = useCart();
  const handleCart = () => {
    const cartData = {
      type: 'c',
      productNo: productNo,
      option: optionFromSlice,
      keyword: keywordNo,
    };
    if (product && optionFromSlice.length === 0)
      toast.error('상품을 먼저 선택해주세요.');
    else {
      updateCartItem.mutate(cartData, {
        onSuccess: () => onClose(),
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
