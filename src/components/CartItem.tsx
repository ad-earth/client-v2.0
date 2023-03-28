import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../elements/Button';
import useViewport from '../hooks/useViewport';
import usePutCartQuery from '../query/usePutCartQuery';
import type { TCartList } from '../redux/reducer/cartSlice';
import {
  setCheckedList,
  setKeywordNo,
  setProductNo,
} from '../redux/reducer/cartSlice';
import { useAppDispatch } from '../redux/store';
import theme from '../shared/style/theme';
import type { IProductPayCart, TUserOption } from '../shared/types/types';
import * as t from '../style/cartItem.style';
import CartOptionModal from './CartOptionModal';
import GlobalModal from './common/GlobalModal';

interface IProps {
  cartList: IProductPayCart[];
  allChecked: boolean;
}

function CartItem(props: IProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<TCartList[]>([]);
  const viewport = useViewport();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const optionModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <CartOptionModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  // 옵션모달 오픈 & 디스패치
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

  // 개별 상품 선택 | 해제
  const handleCheck = useCallback(
    (checked: boolean, id: number, value: number) => {
      if (checked) {
        setCheckedItem([
          ...checkedItem,
          {
            p_No: id,
            p_Price: value,
          },
        ]);
      } else {
        const delCheckedItem = checkedItem.filter(item => item.p_No !== id);
        setCheckedItem(delCheckedItem);
      }
    },
    [checkedItem]
  );

  // 전체 선택 | 해제
  const allCheckedItem = useMemo(() => {
    if (props.allChecked) {
      const allcheckedList = props.cartList?.map(el => ({
        p_No: el.p_No,
        p_Price: el.p_Price,
      }));
      setCheckedItem(allcheckedList);
      return <t.CheckBox type="checkbox" defaultChecked={true} />;
    } else {
      setCheckedItem([]);
      return <t.CheckBox type="checkbox" defaultChecked={false} />;
    }
  }, [props.allChecked]);

  // 선택상품 배열 저장
  useEffect(() => {
    if (checkedItem) {
      dispatch(setCheckedList(checkedItem));
    }
  }, [checkedItem]);

  const { mutate: payMutate } = usePutCartQuery();
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
    payMutate(payData, {
      onSuccess: () =>
        navigate('/payment', {
          state: { type: 'c', productNo: `${prodNo}` },
        }),
    });
  };

  return (
    <>
      {optionModal}
      {props.cartList &&
        props.cartList.map(item => (
          <t.Container key={item.p_No}>
            <t.ProdInfo>
              {props.allChecked ? (
                <>{allCheckedItem}</>
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
