import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Button from '../elements/Button';
import useViewport from '../hooks/useViewport';
import useDeleteCartQuery from '../query/useDeleteCartQuery';
import useGetCartQuery from '../query/useGetCartQuery';
import { setCheckedList } from '../redux/reducer/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import theme from '../shared/style/theme';
import * as t from '../style/cartPage.style';

export default function CartPage() {
  const viewport = useViewport();
  const query = useGetCartQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const checkedItem = useAppSelector(state => state.cartSlice.checkedList);

  const { cartList } = useMemo(
    () => ({
      cartList: query.data?.data.cartList,
    }),
    [query]
  );

  const handleCheck = () => {
    setAllChecked(!allChecked);
  };

  const totalPrice = useMemo(() => {
    if (checkedItem.length > 0) {
      const sum = checkedItem
        .map(item => item.p_Price)
        .reduce((prev, curr) => prev + curr, 0);
      return sum.toLocaleString();
    }
  }, [checkedItem]);

  const { mutate } = useDeleteCartQuery();
  const handleDelete = () => {
    const productNo = checkedItem.map(item => item.p_No);
    const data = {
      type: 'c',
      p_Nos: String(productNo.join()),
    };
    mutate(data, {
      onSuccess: () => {
        alert('상품을 삭제하였습니다.');
        dispatch(setCheckedList([]));
        localStorage.setItem(
          'cartStatus',
          String(cartList.length - checkedItem.length)
        );
      },
    });
  };

  const handleBuy = () => {
    const checkedProdNo = checkedItem.map(item => item.p_No);
    if (checkedItem.length === 0) toast.error('주문하실 상품을 선택해주세요!');
    else
      navigate('/payment', {
        state: { type: 'c', productNo: `${checkedProdNo}` },
      });
  };

  return (
    <t.Container>
      <t.CartHead>
        <p>장바구니</p>
        <t.CountBadge>{cartList?.length}</t.CountBadge>
      </t.CartHead>
      <t.ListWrap>
        <t.ListHead>
          <t.CheckBox
            type="checkbox"
            onChange={handleCheck}
            checked={allChecked}
          />
          <t.ListInfo className="large">
            {viewport >= 990 ? '상품정보' : '전체선택'}
          </t.ListInfo>
          <t.ListInfo className="mid">수량</t.ListInfo>
          <t.ListInfo className="mid">주문금액</t.ListInfo>
          <t.ListInfo className="small">배송정보</t.ListInfo>
        </t.ListHead>
        <CartItem cartList={cartList && cartList} allChecked={allChecked} />
        <t.BtnWrap>
          <Button
            {...btnStyle[0]}
            text="선택상품 삭제"
            onClick={handleDelete}
          />
          <Button {...btnStyle[0]} text="품절상품 삭제" />
        </t.BtnWrap>
        <t.Receipt>
          <t.ReceiptHead>
            총 주문 상품 <span>{checkedItem && checkedItem.length}</span>개
          </t.ReceiptHead>
          <t.ReceiptPrice>
            <t.Price>
              {totalPrice ? totalPrice : 0}원<span>상품금액</span>
            </t.Price>
            <t.Price>+</t.Price>
            <t.Price>
              0원<span>배송비</span>
            </t.Price>
            <t.Price>=</t.Price>
            <t.Price className="total">
              {totalPrice ? totalPrice : 0}원<span>총 주문금액</span>
            </t.Price>
          </t.ReceiptPrice>
        </t.Receipt>
        <Button {...btnStyle[1]} text="주문하기" onClick={handleBuy} />
        <a href="/">계속 쇼핑하기</a>
      </t.ListWrap>
    </t.Container>
  );
}

const btnStyle = [
  {
    width: '96px',
    fontWeight: 'normal',
    radius: '30px',
    border: `0.5px solid ${theme.ls03}`,
    bgColor: theme.bg01,
    color: theme.fc14,
    hBorder: `0.5px solid ${theme.ls11}`,
    hBgColor: theme.bg07,
    hColor: theme.fc14,
    margin: '30px auto',
  },
  {
    width: '30%',
    fontSize: theme.fc16,
    radius: '30px',
    padding: '16px 0',
    margin: '50px auto',
  },
];
