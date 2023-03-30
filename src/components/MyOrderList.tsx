import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../elements/Button';
import { setReviewData } from '../redux/reducer/reviewSlice';
import { useAppDispatch } from '../redux/store';
import theme from '../shared/style/theme';
import type { IMyProduct } from '../shared/types/types';
import * as t from '../style/myOderList.style';
import ProductCard from './common/ProductCard';

type TProps = {
  products: IMyProduct[];
  orderNo?: number;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  type: 'order' | 'detail';
};
export default function MyOrderList(props: TProps) {
  const { products, orderNo, isModalOpen, setIsModalOpen, type } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cancelBtnClick = () =>
    navigate(`/mypage/cancel-call/${orderNo}`, {
      state: { products: products },
    });
  const reviweBtnClick = (product: IMyProduct) => {
    dispatch(setReviewData(product));
    setIsModalOpen(!isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const productClick = (status: boolean, p_No: number) => {
    switch (type) {
      case 'order': {
        navigate(`${orderNo}`);
        break;
      }
      case 'detail': {
        status
          ? navigate(`/detail/${p_No}`)
          : alert('현재 판매하지 않는 상품입니다.');
        break;
      }
    }
  };

  return (
    <t.Base>
      {products.map((product: any, idx: number) => (
        <t.Container key={idx}>
          <t.ProductLink
            onClick={() => productClick(product.p_Status, product.p_No)}
          >
            <ProductCard
              p_Thumbnail={product.p_Thumbnail}
              a_Brand={product.a_Brand}
              p_Name={product.p_Name}
              p_Option={product.p_Option}
            />
            <t.ProductStatus>{product.o_Status}</t.ProductStatus>
          </t.ProductLink>
          <t.ActionButtonContainer>
            {product.o_Status === '주문완료' && (
              <Button {...cancelStyle} onClick={cancelBtnClick}>
                취소
              </Button>
            )}
            {product.p_Status && product.r_Status && (
              <Button {...reviweStyle} onClick={() => reviweBtnClick(product)}>
                구매평 작성
              </Button>
            )}
          </t.ActionButtonContainer>
        </t.Container>
      ))}
    </t.Base>
  );
}
const cancelStyle = {
  bgColor: 'transparent',
  radius: '30px',
  border: `1px solid ${theme.rgba04}`,
  hBgColor: 'transparent',
  hBorder: `1px solid ${theme.rgba08}`,
  hColor: `${theme.fc14}`,
  color: `${theme.fc14}`,
  fontSize: `${theme.fc12}`,
  fontWeight: '500',
  padding: '10px 16px',
  text: '취소',
};
const reviweStyle = {
  radius: '30px',
  fontSize: `${theme.fs12}`,
  fontWeight: '500',
  padding: '10px 16px',
  text: '구매평 작성',
};
