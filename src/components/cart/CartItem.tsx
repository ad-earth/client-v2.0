import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import useViewport from '../../hooks/useViewport';
import useCart from '../../query/useCart';
import {
  setCheckedList,
  setKeywordNo,
  setProductNo,
} from '../../redux/reducer/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import theme from '../../shared/style/theme';
import type { IProductPayCart, TUserOption } from '../../shared/types/types';
import * as t from '../../style/cartItem.style';
import GlobalModal from '../common/GlobalModal';
import CartOptionModal from './CartOptionModal';

interface IProps {
  cartList: IProductPayCart[];
  allChecked: boolean;
}

function CartItem(props: IProps) {
  const viewport = useViewport();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const checkedItem = useAppSelector(
    state => state.cartSlice.checkedList,
    shallowEqual
  );

  const optionModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <CartOptionModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  const handleOption = (
    productNo: number,
    opt: TUserOption[],
    qty: number,
    keywordNo: number
  ) => {
    dispatch(setProductNo(productNo));
    dispatch(setKeywordNo(keywordNo));
    localStorage.setItem('option', JSON.stringify(opt));
    localStorage.setItem('qty', String(qty));
    setIsModalOpen(!isModalOpen);
  };

  const handleCheck = useCallback(
    (checked: boolean, id: number, value: number) => {
      if (checked) {
        dispatch(
          setCheckedList([
            ...checkedItem,
            {
              p_No: id,
              p_Price: value,
            },
          ])
        );
      } else {
        const delCheckedItem = checkedItem.filter(item => item.p_No !== id);
        dispatch(setCheckedList(delCheckedItem));
      }
    },
    [checkedItem]
  );

  useEffect(() => {
    if (props.allChecked) {
      const allCheckedList = props.cartList?.map(el => ({
        p_No: el.p_No,
        p_Price: el.p_Price,
      }));
      dispatch(setCheckedList(allCheckedList));
      setIsAllChecked(true);
    } else {
      dispatch(setCheckedList([]));
      setIsAllChecked(false);
    }
  }, [props.allChecked]);

  const { updateCartItem } = useCart();
  const handleBuy = (
    prodNo: number,
    option: (string | number)[][],
    keyNo: number
  ) => {
    const payData = {
      type: 'c',
      productNo: prodNo,
      option: option,
      keyword: keyNo,
    };
    updateCartItem.mutate(payData);
  };

  return (
    <>
      {optionModal}
      {props.cartList &&
        props.cartList.map(item => (
          <t.Container key={item.p_No}>
            <t.ProdInfo>
              {props.allChecked ? (
                <>
                  {isAllChecked ? (
                    <t.CheckBox type="checkbox" defaultChecked={true} />
                  ) : (
                    <t.CheckBox type="checkbox" defaultChecked={true} />
                  )}
                </>
              ) : (
                <t.CheckBox
                  type="checkbox"
                  onChange={e =>
                    handleCheck(
                      e.currentTarget.checked,
                      item.p_No,
                      item.p_Price
                    )
                  }
                />
              )}
              <img
                src={item.p_Thumbnail[0]}
                alt="thumbnail"
                onClick={() => navigate(`/detail/${item.p_No}`)}
              />
              <t.InfoWrap>
                <p onClick={() => navigate(`/detail/${item.p_No}`)}>
                  [{item.a_Brand}] {item.p_Name}
                </p>
                {item.p_Option.map(
                  (option: (string | number)[], idx: number) => (
                    <t.Option key={idx}>
                      [필수] {option[0] ? option[0] : option[2]} - {option[4]}개
                    </t.Option>
                  )
                )}
              </t.InfoWrap>
            </t.ProdInfo>
            {viewport >= 990 ? (
              <>
                <t.DetailInfo className="mid">
                  <span>{item.p_Cnt}</span>
                  <Button
                    text="옵션/수량 변경"
                    {...BtnStyle[0]}
                    onClick={() =>
                      handleOption(
                        item.p_No,
                        item.p_Option,
                        item.p_Cnt,
                        item.k_No
                      )
                    }
                  />
                </t.DetailInfo>
                <t.DetailInfo className="mid">
                  <p>{item.p_Price.toLocaleString()}원</p>
                  <Button
                    text="바로구매"
                    {...BtnStyle[1]}
                    onClick={() =>
                      handleBuy(item.p_No, item.p_Option, item.k_No)
                    }
                  />
                </t.DetailInfo>
                <t.DetailInfo className="small">
                  <span>배송비 무료</span>
                </t.DetailInfo>
              </>
            ) : (
              <t.SmallInfoWrap>
                <t.SmallInfo className="top">
                  <p>주문금액</p>
                  <p>{item.p_Price.toLocaleString()}원</p>
                </t.SmallInfo>
                <t.SmallInfo>
                  <p>상품금액 (총 {item.p_Cnt}개)</p>
                  <p>{item.p_Price.toLocaleString()}원</p>
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
                    text="옵션/수량 변경"
                    {...BtnStyle[0]}
                    onClick={() =>
                      handleOption(
                        item.p_No,
                        item.p_Option,
                        item.p_Cnt,
                        item.k_No
                      )
                    }
                  />
                  <Button
                    text="바로구매"
                    {...BtnStyle[1]}
                    onClick={() =>
                      handleBuy(item.p_No, item.p_Option, item.k_No)
                    }
                  />
                </t.BtnWrap>
              </t.SmallInfoWrap>
            )}
          </t.Container>
        ))}
    </>
  );
}

export default CartItem;

const BtnStyle = [
  {
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
    width: '106px',
    fontWeight: 'normal',
    radius: '30px',
  },
];
