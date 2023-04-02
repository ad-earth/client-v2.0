import styled from 'styled-components';
import type { IProps } from '../components/common/MenuDrop';

export const MenuContainer = styled.div<IProps>`
  width: ${props => (props.width ? props.width : '120px')};
  position: absolute;
  top: ${props => (props.top ? props.top : '60px')};
  left: ${props => (props.left ? props.left : '45%')};
  text-align: center;
  background-color: ${({ theme }) => theme.bg01};
  box-shadow: 0 3px 6px ${({ theme }) => theme.rgba03};
  border-radius: ${props => (props.radius ? props.radius : '15px')};
  border: 0px solid ${({ theme }) => theme.ls03};
  opacity: ${props => (props.isDropped ? '1' : '0')};
  visibility: ${props => (props.isDropped ? 'visible' : 'hidden')};
  z-index: 9999;
  transform: translateY(-15px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ul {
    overflow: hidden;
    border-radius: 15px;
  }
  li {
    font-size: ${({ theme }) => theme.fs14};
    color: ${props => (props.fcColor ? props.fcColor : props.theme.fc15)};
    padding: 10px 0;
    background-clip: padding-box;
    :hover {
      background-color: ${props =>
        props.bgColor ? props.bgColor : props.theme.bg20};
      cursor: pointer;
    }
  }
  a {
    margin: 0;
    text-decoration: none;
  }
`;
