import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 1200px;
  margin: 35px auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  width: 98%;
  display: flex;
  margin: 0 auto;
  border: 1px solid ${theme.ls03};
`;

export const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  color: ${theme.fc09};
  font-size: ${theme.fs15};
  cursor: pointer;
  &.right {
    border-left: 1px solid ${theme.ls03};
  }
`;

export const ContentsWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
  padding: 20px 0;
`;

export const DescWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  color: ${theme.fc09};
  text-align: center;
  img {
    width: 100%;
    object-fit: contain;
  }
  & p {
    color: ${theme.fc09};
    font-size: ${theme.fs15};
    line-height: 25px;
    text-align: center;
    padding: 10px;
    &.title {
      border-bottom: 0.5px solid ${theme.ls08};
    }
  }
`;
