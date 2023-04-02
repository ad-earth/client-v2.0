import React from 'react';
import * as t from '../style/button.style';

export interface BtnType {
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  border?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  hColor?: string;
  hBorder?: string;
  hBgColor?: string;
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: BtnType) {
  return <t.Btn {...props}>{props.text ? props.text : props.children}</t.Btn>;
}

export default Button;
