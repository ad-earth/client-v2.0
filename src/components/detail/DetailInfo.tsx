import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Badge from '../../elements/Badge';
import Button from '../../elements/Button';
import Heart from '../../elements/Heart';
import useCart from '../../query/useCart';
import { setCartStatus } from '../../redux/reducer/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import theme from '../../shared/style/theme';
import type { IProductDetail } from '../../shared/types/types';
import * as t from '../../style/detailInfo.style';
import OptionBox from '../common/OptionBox';
import SingleBox from '../common/SingleBox';
import DetailModal from './DetailModal';

type TProps = {
  product: IProductDetail;
  keyNo: number;
  isLike: boolean;
};

export default function DetailInfo({ product, keyNo, isLike }: TProps) {
  const { productNo } = useParams();

  const token = useMemo(() => localStorage.getItem('token'), []);

  const { price, discount, isOption } = useMemo(
    () => ({
      price: product?.p_Cost.toLocaleString('ko-kr'),
      discount: (
        product?.p_Cost *
        (1 - product?.p_Discount / 100)
      ).toLocaleString('ko-kr'),
      isOption:
        (product?.p_Option.length > 0 && product?.p_Option[0][0] !== null) ||
        product?.p_Option[0][2] !== null,
    }),
    [product]
  );
  const [open, setOpen] = useState<boolean>(false);
  const options = useAppSelector(state => state.optionSlice);

  const { updateCartItem } = useCart();

  const payData = {
    type: 'd',
    productNo: Number(productNo),
    option: options,
    keyword: keyNo,
  };

  const handleBuy = () => {
    if (!token) {
      toast.error('로그인 먼저 해주세요.');
      return;
    }
    if (product && isOption && options.length === 0)
      toast.error('상품을 먼저 선택해주세요.');
    else {
      updateCartItem.mutate(payData);
    }
  };

  const dispatch = useAppDispatch();
  const cartData = {
    type: 'c',
    productNo: Number(productNo),
    option: options,
    keyword: keyNo,
  };

  const handleCart = () => {
    if (!token) {
      toast.error('로그인 먼저 해주세요.');
      return;
    }
    if (product && isOption && options.length === 0)
      toast.error('상품을 먼저 선택해주세요.');
    else {
      updateCartItem.mutate(cartData, {
        onSuccess: res => {
          localStorage.setItem('cartStatus', String(res.data.cartStatus));
          dispatch(setCartStatus(res.data.cartStatus));
          setOpen(true);
        },
      });
    }
  };

  return (
    <t.MainContainer>
      <DetailModal open={open} setOpen={setOpen} />
      <t.Wrapper>
        <p>
          [{product?.a_Brand}] {product?.p_Name}
        </p>
        {product?.p_Best && <Badge type={'BEST'} />}
        {product?.p_New && <Badge type={'NEW'} />}
        {product?.p_Sale && <Badge type={'SALE'} />}
        {product?.p_Soldout && <Badge type={'SOLDOUT'} />}
      </t.Wrapper>
      <t.Wrapper className="bottom-line">
        <p className="green">{discount ? discount : price}원</p>
        {price !== discount && (
          <p className="small discount">{discount && price}원</p>
        )}
      </t.Wrapper>
      <p>{product?.p_Desc}</p>
      <p className="small">
        <span>원산지</span> 대한민국
      </p>
      <p className="small">
        <span>브랜드</span> {product?.a_Brand}
      </p>
      <p className="small">
        <span>배송비</span> 전 품목 무료배송
      </p>
      {isOption ? (
        <OptionBox product={product} isCart={false} />
      ) : (
        <SingleBox product={product} isCart={false} />
      )}
      <t.Wrapper className="button-wrap">
        {product?.p_Soldout ? (
          <Button
            {...propsSoldout}
            onClick={() => {
              toast.error('이 상품은 현재 구매가 불가합니다.');
            }}
          >
            품절된 상품입니다.
          </Button>
        ) : (
          <>
            <Button onClick={handleBuy} radius={'30px'}>
              구매하기
            </Button>
            <Button onClick={handleCart} {...props}>
              장바구니
            </Button>
          </>
        )}
        <Button {...props}>
          <Heart
            likeCnt={product?.p_Like}
            productNo={product?.p_No}
            userLike={isLike}
          />
        </Button>
      </t.Wrapper>
    </t.MainContainer>
  );
}

const propsSoldout = {
  width: '200%',
  radius: '30px',
  bgColor: `${theme.bg09}`,
  hBgColor: `${theme.bg09}`,
};
const props = {
  radius: '30px',
  border: `0.5px solid ${theme.ls03}`,
  bgColor: `${theme.bg01}`,
  hBgColor: `${theme.bg01}`,
  color: `${theme.fc09}`,
  hColor: `${theme.fc09}`,
  hBorder: `0.5px solid ${theme.ls11}`,
};
