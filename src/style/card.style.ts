import styled from 'styled-components';
import theme from '../shared/style/theme';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Message } from '../assets/icons/message-circle.svg';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
  section {
    display: flex;
    gap: 4px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: grey;
  background-size: cover;
`;

export const Color = styled.div<{ code: string }>`
  width: 9px;
  height: 9px;
  background: ${props => props.code};
  border: 1px solid ${theme.ls04};
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
`;

export const Name = styled.p`
  margin: 10px 0;
  font-size: ${theme.fs14};
  color: ${theme.fc11};
  text-align: left;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: ${theme.fs13};
  color: ${theme.fc15};
  display: flex;
  span {
    font-size: ${theme.fs13};
    color: ${theme.fc05};
    display: flex;
    text-decoration-line: line-through;
    margin-left: 6px;
  }
`;

export const MessageIcon = styled(Message)`
  color: ${theme.bg09};
  width: 20px;
  cursor: pointer;
`;

export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`;

export const HeartIcon = styled(Heart)`
  fill: ${theme.bg16};
  color: ${theme.bg16};
  width: 20px;
  cursor: pointer;
`;
