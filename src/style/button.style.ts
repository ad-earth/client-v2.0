import styled from 'styled-components';
import theme from '../shared/style/theme';
import { BtnType } from '../components/common/Button';

export const Btn = styled.button<BtnType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : '100%')};
  font-size: ${props => (props.fontSize ? props.fontSize : theme.fs14)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
  color: ${props => (props.color ? props.color : theme.fc01)};
  border: ${props => (props.border ? props.border : '1px solid transparent')};
  border-radius: ${props => (props.radius ? props.radius : 'none')};
  background-color: ${props => (props.bgColor ? props.bgColor : theme.bg16)};
  padding: ${props => (props.padding ? props.padding : '10px 0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  :hover {
    border: ${props =>
      props.hBorder ? props.hBorder : '1px solid transparent'};
    background-color: ${props =>
      props.hBgColor ? props.hBgColor : theme.bg16};
    color: ${props => (props.hColor ? props.hColor : theme.fc01)};
    transition: 0.5s;
    cursor: pointer;
  }
`;
