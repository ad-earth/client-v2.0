import * as t from '../../style/input.style';
import { forwardRef, ForwardRefRenderFunction } from 'react';

export interface InputType {
  outline?: string;
  fontSize?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
  holderName?: string;
  color?: string;
  bgColor?: string;
  fBorder?: string;
  value?: string;
  name?: string;
  type?: string;
  ref?: any;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { ...props },
  ref
) => {
  return (
    <t.MyInput
      type={props.type}
      placeholder={props.holderName}
      ref={ref}
      defaultValue={props.defaultValue}
      {...props}
    ></t.MyInput>
  );
};

export default forwardRef(Input);
