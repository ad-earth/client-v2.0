import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import MyCancelAmount from '../components/my/MyCancelAmount';
import Button from '../elements/Button';
import useViewport from '../hooks/useViewport';
import useOrderProduct from '../query/useOrderProduct';
import type { IMyProduct } from '../shared/types/types';
import * as t from '../style/myCancelPage.style';

export default function MyCancelPage() {
  const viewport = useViewport();
  const navigate = useNavigate();

  const { isLoading, productData, productId, cancelProduct } =
    useOrderProduct();

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [checkPrice, setCheckPrices] = useState<number>(0);

  useEffect(() => {
    if (checkedItems.length === 0 && productData) return;

    const newPrices = productData
      ?.map((item, i) => (checkedItems.includes(item.p_No) ? item.p_Price : 0))
      .reduce((acc, cur) => acc + cur);

    setCheckPrices(newPrices);
  }, [checkedItems, productData]);

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.checked
      ? setCheckedItems([...checkedItems, Number(target.value)])
      : setCheckedItems(checkedItems.filter(el => el !== Number(target.value)));
  };

  const cancleClick = () => {
    switch (checkedItems.length === 0) {
      case true: {
        alert('취소상품을 선택해 주세요');
        break;
      }
      default: {
        cancelProduct.mutate({
          p_No: checkedItems,
        });
        break;
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      <t.Title>
        <span onClick={() => navigate('..')}></span>
        주문 취소요청
        <t.OrderNumber>{productId}</t.OrderNumber>
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
            {productData.map((product: IMyProduct, i: number) => (
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
