import styled from 'styled-components';

export const Base = styled.div``;

//orderList
export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.ls05};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -1px;
  padding: 20px 24px 20px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    flex-direction: column;
    padding: 20px 15px;
  }
`;

export const ProductLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

export const ProductStatus = styled.p`
  margin-right: 144px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ActionButtonContainer = styled.div`
  width: 100px;
  @media (max-width: 990px) {
    width: 100%;
    padding: 10px 0 0 85px;
    box-sizing: border-box;
  }
`;
