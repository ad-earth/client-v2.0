import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  addOption,
  deleteOption,
  setOptions,
  updateOption,
} from '../../redux/reducer/optionSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import type { IProductDetail, TOption } from '../../shared/types/types';
import * as t from '../../style/option.style';

type TProps = {
  product: IProductDetail;
};
type TUserOption = (string | number)[];

function Option({ product }: TProps) {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [totalQty, setTotalQty] = useState<number>(0);
  const dispatch = useAppDispatch();
  const options = useAppSelector(state => state.optionSlice);
  const { isOption, totalPrice } = useMemo(
    () => ({
      isOption:
        product?.p_Option.length > 0
          ? product?.p_Option[0][0] !== null || product?.p_Option[0][2] !== null
          : false,
      totalPrice: options.reduce(
        (acc, cur) => acc + (product?.p_Cost + Number(cur[3])) * Number(cur[4]),
        0
      ),
    }),
    [product, options]
  );

  useEffect(() => {
    if (!isOption) {
      setTotalQty(() => 1);
      dispatch(setOptions([[null, null, null, 0, 1, product?.p_Cost]]));
      sessionStorage.setItem('total', '1');
    } else {
      setTotalQty(() => 0);
      dispatch(setOptions([]));
    }
  }, [isOption]);

  const handleAddOption = (option: TOption) => {
    const userOption = option.slice(0, -1);
    userOption.push(1);
    userOption.push(product?.p_Cost + option[3]);

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

  const handleDeleteOption = (option: TUserOption) => {
    dispatch(deleteOption(option));
    setTotalQty(prev => prev - Number(option[4]));
  };

  const handleAddOptQty = (option: TUserOption) => {
    const currentQty = Number(option[4]);
    const userOption = [...option];
    userOption.splice(4, 1, currentQty + 1);
    dispatch(updateOption(userOption));
    setTotalQty(prev => prev + 1);
  };

  const handleSubstractOptQty = (option: TUserOption) => {
    const currentQty = Number(option[4]);
    const userOption = [...option];
    if (currentQty !== 1) userOption.splice(4, 1, currentQty - 1);
    else userOption.splice(4, 1, 1);
    dispatch(updateOption(userOption));

    if (totalQty !== 1) setTotalQty(prev => prev - 1);
  };

  const handleSubstractQty = () => {
    setTotalQty(prev => prev - 1);
    dispatch(
      setOptions([[null, null, null, 0, totalQty, product?.p_Cost * totalQty]])
    );
  };
  const handleAddQty = () => {
    setTotalQty(prev => prev + 1);
    dispatch(
      setOptions([[null, null, null, 0, totalQty, product?.p_Cost * totalQty]])
    );
  };

  return (
    <t.Container>
      <p className="bold">옵션</p>
      {isOption && (
        <t.DropDown
          isDrop={isDrop}
          onClick={() => {
            setIsDrop(!isDrop);
          }}
        >
          옵션 선택
          {isDrop ? <t.IcToggleUp /> : <t.IcToggleDown />}
        </t.DropDown>
      )}
      {isOption && isDrop && (
        <t.DropMenuWrapper>
          {product.p_Option?.map((option, idx) => {
            return (
              <t.DropMenu key={idx}>
                <t.OptionWrapper onClick={() => handleAddOption(option)}>
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

      {isOption ? (
        options.map((option, idx) => {
          return (
            <t.OptBox key={idx}>
              <t.Wrapper>
                <p>{option[0] ? option[0] : option[2]}</p>
                <button onClick={() => handleDeleteOption(option)}>𝖷</button>
              </t.Wrapper>
              <t.BtnWrapper>
                <t.Button onClick={() => handleSubstractOptQty(option)}>
                  -
                </t.Button>
                <t.Qty>{option[4]}</t.Qty>
                <t.Button
                  className="plus"
                  onClick={() => handleAddOptQty(option)}
                >
                  +
                </t.Button>
              </t.BtnWrapper>
            </t.OptBox>
          );
        })
      ) : (
        <t.OptBox>
          <t.Wrapper>
            <p>수량</p>
          </t.Wrapper>
          <t.BtnWrapper>
            <t.Button onClick={handleSubstractQty}>-</t.Button>
            <t.Qty>{totalQty}</t.Qty>
            <t.Button className="plus" onClick={handleAddQty}>
              +
            </t.Button>
          </t.BtnWrapper>
        </t.OptBox>
      )}
      <t.Wrapper className="price">
        총 상품 금액({totalQty}개)
        <span>
          {isOption
            ? totalPrice.toLocaleString('ko-kr')
            : (product?.p_Cost * totalQty).toLocaleString('ko-kr')}
          원
        </span>
      </t.Wrapper>
    </t.Container>
  );
}

export default Option;
