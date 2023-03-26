import styled from 'styled-components';

export const Base = styled.div``;
export const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const Article = styled.article``;
export const OrderList = styled.div`
  margin-bottom: 20px;
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;

export const DataNull = styled.section`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
`;
