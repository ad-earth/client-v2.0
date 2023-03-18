import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePutCartQuery from '../query/usePutCartQuery';
import { useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import type { IProductDetail } from '../shared/types/types';
import * as t from '../style/detailInfo.style';
import Badge from './common/Badge';
import Button from './common/Button';
import Heart from './common/Heart';
import Option from './common/Option';

type TProps = {
  product: IProductDetail;
};

function DetailInfo({ product }: TProps) {
  const { productNo } = useParams();
  const { price, discount } = useMemo(
    () => ({
      price: product?.p_Cost,
      discount: product?.p_Cost * (1 - product?.p_Discount / 100),
    }),
    [product]
  );

  const option = useAppSelector(state => state.optionSlice);

  const { mutate, isSuccess } = usePutCartQuery(
    'd_Type',
    Number(productNo),
    option,
    null
  );
  const handleBuy = () => mutate;

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/payment');
  }, [isSuccess]);

  return (
    <t.MainContainer>
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
        <p className="green">{price?.toLocaleString('ko-kr')}원</p>
        {price !== discount && (
          <p className="small discount">
            {discount?.toLocaleString('ko-kr')}원
          </p>
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
      <Option product={product} />
      <t.Wrapper>
        <Button onClick={handleBuy} radius={'30px'}>
          구매하기
        </Button>
        <Button {...props}>장바구니</Button>
        <Button {...props}>
          <Heart likeCnt={product?.p_Like} productNo={product?.p_No} />
        </Button>
      </t.Wrapper>
    </t.MainContainer>
  );
}

const props = {
  radius: '30px',
  border: `0.5px solid ${theme.ls03}`,
  bgColor: `${theme.bg01}`,
  hBgColor: `${theme.bg01}`,
  color: `${theme.fc09}`,
  hColor: `${theme.fc09}`,
  hBorder: `0.5px solid ${theme.ls11}`,
};

export default DetailInfo;
