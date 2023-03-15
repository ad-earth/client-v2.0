import styled from 'styled-components';
import theme from '../shared/style/theme';

export const MainContainer = styled.div`
  width: 49%;
  @media (max-width: 990px) {
    width: 98%;
    margin: 0 auto;
  }
`;

export const ProdImg = styled.img`
  width: 100%;
  object-fit: contain;
  :focus {
    outline: none;
  }
`;

export const Page = styled.div`
  width: 40px;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 3px 8px;
  box-sizing: border-box;
  border-radius: 30px;
  background: ${theme.bg11};
  color: ${theme.fc01};
  font-size: ${theme.fs12};
`;
