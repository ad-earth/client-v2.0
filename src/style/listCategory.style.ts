import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 900px;
  height: auto;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 15px 0;
  min-width: 550px;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button<{ active: boolean }>`
  width: 25%;
  padding: 5px 0;
  border: 0.3px solid ${theme.ls07};
  line-height: 25.6px;
  font-size: ${theme.fs16};
  font-family: 'Noto Sans KR', 'sans-serif';
  background-color: ${props => (props.active ? theme.bg16 : theme.bg01)};
  color: ${props => (props.active ? theme.fc01 : theme.fc09)};
  &:hover {
    background-color: ${theme.bg20};
    color: ${theme.fc15};
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    width: 52px;
    padding: 0 1px;
    border: 0.2px solid ${theme.bg01};
    border-radius: 4rem;
    margin: 0px 2px;
    box-sizing: border-box;
    font-size: ${theme.fs13};
    font-family: 'Noto Sans KR', 'sans-serif';
    background-color: ${props => (props.active ? theme.bg16 : theme.bg01)};
    color: ${props => (props.active ? theme.fc01 : theme.fc15)};
    :hover {
      background-color: ${theme.bg16};
      color: ${theme.fc01};
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;

export const Line = styled.div`
  width: 98%;
  border-bottom: 1px solid ${theme.ls04};
  margin: 15px auto;
`;
