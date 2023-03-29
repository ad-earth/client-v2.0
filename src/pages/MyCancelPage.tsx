import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import MyCancelAmount from '../components/MyCancelAmount';
import Button from '../elements/Button';
import useViewport from '../hooks/useViewport';
import useOrder from '../query/useOrder';
import type { Product } from '../shared/types/types';
import * as t from '../style/myCancelPage.style';

type TLocation = {
  products: Product[];
};

export default function MyCancelPage() {
  const viewport = useViewport();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = location.state as TLocation;
  const { id } = useParams<{ id: string }>();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [checkPrice] = useState<number>(0);

  const { cancelProduct } = useOrder();

  const cancleClick = () => {
    switch (checkedItems.length === 0) {
      case true: {
        alert('취소상품을 선택해 주세요');
        break;
      }
      default: {
        cancelProduct.mutate({
          p_Id: id,
          p_No: checkedItems,
        });
        break;
      }
    }
  };

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    target.checked
      ? setCheckedItems([...checkedItems, Number(target.value)])
      : setCheckedItems(checkedItems.filter(el => el !== Number(target.value)));
  };

  return (
    <t.Base>
      <t.Title>
        <span onClick={() => navigate('..')}></span>
        주문 취소요청
        <t.OrderNumber>{id}</t.OrderNumber>
      </t.Title>
      <t.Contents>
        <t.ContentsBox>
          <t.Description>
            <t.Text>
              주문하신 상품 단위로 취소요청이 가능합니다.(수량 부분취소 불가)
              <br />
              상품이 발송되기 전에 취소요청을 하실 수 있습니다.
            </t.Text>
            <t.Strong>
              단, 상품을 이미 발송한 경우 취소처리가 거부될 수 있습니다.
            </t.Strong>
          </t.Description>
          <t.ButtomBox>
            <Button radius="50px" onClick={cancleClick}>
              주문 취소
            </Button>
          </t.ButtomBox>
        </t.ContentsBox>
        <t.ContentsBox>
          <t.CancelListBox>
            <t.Title>취소 상품 선택</t.Title>
            {products.map((product: Product, i: number) => (
              <t.CancelList key={i}>
                <t.Checkbox
                  type="checkbox"
                  value={product.p_No}
                  onChange={handleCheckBox}
                  checked={checkedItems.includes(product.p_No) ? true : false}
                />
                <ProductCard
                  p_Thumbnail={product.p_Thumbnail}
                  a_Brand={product.a_Brand}
                  p_Name={product.p_Name}
                  p_Option={product.p_Option}
                  p_Cost={product.p_Cost}
                  p_Discount={product.p_Discount}
                />
              </t.CancelList>
            ))}
          </t.CancelListBox>
          <MyCancelAmount checkPrice={checkPrice} />
          {viewport <= 990 && (
            <t.MobileButtomBox>
              <Button radius="50px" onClick={cancleClick}>
                주문 취소
              </Button>
            </t.MobileButtomBox>
          )}
        </t.ContentsBox>
      </t.Contents>
    </t.Base>
  );
}
