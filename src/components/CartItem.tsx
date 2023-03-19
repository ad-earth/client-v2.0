import { useState } from 'react';
import useViewport from '../hooks/useViewport';
import theme from '../shared/style/theme';
import type { ICartList } from '../shared/types/types';
import * as t from '../style/cartItem.style';
import CartOptionModal from './CartOptionModal';
import Button from './common/Button';
import GlobalModal from './common/GlobalModal';

function CartItem({ cartList }: { cartList: ICartList }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const viewport = useViewport();

  const optionModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <CartOptionModal />
    </GlobalModal>
  );
  return (
    <>
      {optionModal}
      <t.Container>
        <t.ProdInfo>
          <t.CheckBox type="checkbox" />
          <img
            src={cartList.p_Thumbnail && cartList.p_Thumbnail[0]}
            alt="thumbnail"
          />
          <t.InfoWrap>
            <p>
              [{cartList.a_Brand && cartList.a_Brand}]{' '}
              {cartList.p_Name && cartList.p_Name}
            </p>
            {cartList.p_Option.map(item => (
              <t.Option>
                [필수] {item[0] ? item[0] : item[2]} - {item[4]}개
              </t.Option>
            ))}
          </t.InfoWrap>
        </t.ProdInfo>
        {viewport >= 990 ? (
          <>
            <t.DetailInfo className="mid">
              <span>{cartList.p_Cnt && cartList.p_Cnt}</span>
              <Button
                {...BtnStyle[0]}
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </t.DetailInfo>
            <t.DetailInfo className="mid">
              <p>{cartList.p_Price && cartList.p_Price}원</p>
              <Button {...BtnStyle[1]} />
            </t.DetailInfo>
            <t.DetailInfo className="small">
              <span>배송비 무료</span>
            </t.DetailInfo>
          </>
        ) : (
          <t.SmallInfoWrap>
            <t.SmallInfo className="top">
              <p>주문금액</p>
              <p>{cartList.p_Price && cartList.p_Price}원</p>
            </t.SmallInfo>
            <t.SmallInfo>
              <p>상품금액 (총 {cartList.p_Cnt && cartList.p_Cnt}개)</p>
              <p>{cartList.p_Price && cartList.p_Price}원</p>
            </t.SmallInfo>
            <t.SmallInfo>
              <p>배송비</p>
              <p>무료</p>
            </t.SmallInfo>
            <t.SmallInfo>
              <p>배송수단</p>
              <p>택배</p>
            </t.SmallInfo>
            <t.BtnWrap>
              <Button
                {...BtnStyle[0]}
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
              <Button {...BtnStyle[1]} />
            </t.BtnWrap>
          </t.SmallInfoWrap>
        )}
      </t.Container>
    </>
  );
}

export default CartItem;

const BtnStyle = [
  {
    text: '옵션/수량 변경',
    width: '106px',
    fontWeight: 'normal',
    radius: '30px',
    color: theme.fc14,
    hColor: theme.fc14,
    bgColor: theme.bg01,
    hBgColor: theme.bg02,
    border: `0.5px solid ${theme.ls03}`,
    hBorder: `0.5px solid ${theme.ls11}`,
  },
  {
    text: '바로구매',
    width: '106px',
    fontWeight: 'normal',
    radius: '30px',
  },
];
