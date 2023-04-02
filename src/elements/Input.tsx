import * as t from '../style/input.style';

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

function Input({ ...props }: InputType) {
  return (
    <t.MyInput
      type={props.type}
      placeholder={props.holderName}
      defaultValue={props.defaultValue}
      {...props}
      autoComplete="off"
    ></t.MyInput>
  );
}

export default Input;
