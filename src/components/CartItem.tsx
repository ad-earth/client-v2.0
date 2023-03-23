import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useViewport from '../hooks/useViewport';
import type { TCartList } from '../redux/reducer/cartSlice';
import { setCheckedList, setProductNo } from '../redux/reducer/cartSlice';
import { useAppDispatch } from '../redux/store';
import theme from '../shared/style/theme';
import type { ICartList, TUserOption } from '../shared/types/types';
import * as t from '../style/cartItem.style';
import CartOptionModal from './CartOptionModal';
import Button from './common/Button';
import GlobalModal from './common/GlobalModal';

interface IProps {
  cartList: ICartList[];
  allChecked: boolean;
}

function CartItem(props: IProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<TCartList[]>([]);
  const viewport = useViewport();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const optionModal = isModalOpen && (
    <GlobalModal onClose={() => setIsModalOpen(false)}>
      <CartOptionModal onClose={() => setIsModalOpen(false)} />
    </GlobalModal>
  );

  // 옵션모달 오픈 & 디스패치
  const handleOption = (num: number, opt: TUserOption[], qty: number) => {
    dispatch(setProductNo(num));
    localStorage.setItem('option', JSON.stringify(opt));
    localStorage.setItem('qty', String(qty));
    setIsModalOpen(!isModalOpen);
  };

  // 개별 상품 선택 | 해제
  const handleCheck = useCallback(
    (checked: boolean, id: string, value: string) => {
      if (checked) {
        setCheckedItem([
          ...checkedItem,
          {
            p_No: Number(id),
            p_Price: Number(value),
          },
        ]);
      } else {
        const delCheckedItem = checkedItem.filter(
          item => item.p_No !== Number(id)
        );
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
                  id={String(item.p_No)}
                  value={item.p_Price}
                  onChange={e =>
                    handleCheck(
                      e.currentTarget.checked,
                      e.currentTarget.id,
                      e.currentTarget.value
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
                      handleOption(item.p_No, item.p_Option, item.p_Cnt)
                    }
                  />
                </t.DetailInfo>
                <t.DetailInfo className="mid">
                  <p>{item.p_Price.toLocaleString()}원</p>
                  <Button text="바로구매" {...BtnStyle[1]} />
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
                      handleOption(item.p_No, item.p_Option, item.p_Cnt)
                    }
                  />
                  <Button text="바로구매" {...BtnStyle[1]} />
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
