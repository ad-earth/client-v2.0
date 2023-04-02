import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { shallowEqual } from 'react-redux';
import {
  addOption,
  deleteOption,
  setOptions,
  updateOption,
} from '../../redux/reducer/optionSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import type { IProductDetail, TOption } from '../../shared/types/types';
import * as t from '../../style/box.style';

type TUserOption = (string | number)[];
type TProps = {
  product: IProductDetail;
  isCart: boolean;
  qty?: number;
};

export default function OptionBox({ product, isCart, qty }: TProps) {
  const dispatch = useAppDispatch();
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [totalQty, setTotalQty] = useState<number>(0);
  const options = useAppSelector(state => state.optionSlice, shallowEqual);

  useEffect(() => {
    if (isCart) {
      setTotalQty(qty);
      const option = JSON.parse(localStorage.getItem('option'));
      dispatch(setOptions(option));
    }
  }, [isCart]);

  useEffect(() => {
    if (!isCart) dispatch(setOptions([]));
  }, []);

  const price = useMemo(
    () =>
      product?.p_Discount
        ? product?.p_Cost * (1 - product?.p_Discount / 100)
        : product?.p_Cost,
    [product]
  );

  const totalPrice = useMemo(
    () =>
      options
        .reduce(
          (acc, cur) => acc + (price + Number(cur[3])) * Number(cur[4]),
          0
        )
        .toLocaleString('ko-kr'),
    [options, price]
  );

  const toggle = () => setIsDrop(prev => !prev);

  const handleAddOpt = (option: TOption) => {
    const userOption = option.slice(0, -1);
    userOption.push(1);
    userOption.push(price + option[3]);

    const sameOption = options.filter(o =>
      o[0] ? o[0] === option[0] : o[2] === option[2]
    );

    if (sameOption.length) toast.error('이미 선택한 옵션입니다.');
    else {
      dispatch(addOption(userOption));
      setIsDrop(false);
      setTotalQty(prev => prev + 1);
    }
  };

  const deleteOpt = (option: TUserOption) => {
    dispatch(deleteOption(option));
    setTotalQty(prev => prev - Number(option[4]));
  };

  const addQty = (option: TUserOption) => {
    const currentQty = Number(option[4]);
    const userOption = [...option];
    userOption.splice(4, 1, currentQty + 1);
    dispatch(updateOption(userOption));
    setTotalQty(prev => prev + 1);
  };

  const substractQty = (option: TUserOption) => {
    const currentQty = Number(option[4]);
    const userOption = [...option];
    if (currentQty !== 1) userOption.splice(4, 1, currentQty - 1);
    else userOption.splice(4, 1, 1);
    dispatch(updateOption(userOption));

    if (totalQty !== 1) setTotalQty(prev => prev - 1);
  };

  return (
    <t.Container>
      <t.DropDown isDrop={isDrop} onClick={toggle}>
        옵션 선택
        {isDrop ? <t.IcToggleUp /> : <t.IcToggleDown />}
      </t.DropDown>
      {isDrop && (
        <t.DropMenuWrapper>
          {product.p_Option?.map((option, idx) => {
            return (
              <t.DropMenu key={idx}>
                <t.OptionWrapper onClick={() => handleAddOpt(option)}>
                  {option[1] && <t.ColorIcon colorCode={option[1]} />}
                  {option[0] ? option[0] : option[2]}
                  {option[4] === 0 && '(품절)'}
                  {option[3] !== 0 && `(+${option[3]}원)`}
                </t.OptionWrapper>
              </t.DropMenu>
            );
          })}
        </t.DropMenuWrapper>
      )}
      {options.map((opt, idx) => (
        <t.OptBox key={idx}>
          <t.Wrapper>
            {opt[0] ? opt[0] : opt[2]}
            <button onClick={() => deleteOpt(opt)}>𝖷</button>
          </t.Wrapper>
          <t.BtnWrapper>
            <t.Button onClick={() => substractQty(opt)}>-</t.Button>
            <t.Qty>{opt[4]}</t.Qty>
            <t.Button className="plus" onClick={() => addQty(opt)}>
              +
            </t.Button>
          </t.BtnWrapper>
        </t.OptBox>
      ))}
      <t.Wrapper className="price">
        총 상품 금액({totalQty}개)
        <span>{totalPrice}원</span>
      </t.Wrapper>
    </t.Container>
  );
}
