import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const CartHead = styled.div`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    color: ${theme.fc09};
    font-size: ${theme.fs24};
    margin-right: 10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const CountBadge = styled.div`
  width: 20px;
  height: 20px;
  color: ${theme.fc01};
  font-size: ${theme.fs11};
  background-color: ${theme.fc09};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  a {
    color: ${theme.fc15};
    margin: 30px auto;
  }
`;
export const ListHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  color: ${theme.rgba10};
  font-size: ${theme.fs14};
  border-top: 1px solid ${theme.rgba07};
  border-bottom: 1px solid ${theme.rgba07};
  @media (max-width: 990px) {
    width: 95%;
    margin: 0 auto;
  }
`;
export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.rgba10};
  margin-right: 20px;
`;
export const ListInfo = styled.p`
  &.large {
    width: 63%;
  }
  &.mid {
    width: 19%;
    display: flex;
    justify-content: center;
    @media (max-width: 990px) {
      display: none;
    }
  }
  &.small {
    width: 15%;
    display: flex;
    justify-content: center;
    @media (max-width: 990px) {
      display: none;
    }
  }
`;
export const BtnWrap = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 990px) {
    margin-left: 20px;
  }
`;
export const Receipt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border-bottom: 2px solid ${theme.rgba04};
  border-top: 2px solid ${theme.rgba04};
  @media (max-width: 990px) {
    width: 95%;
    display: flex;
    margin: 0 auto;
  }
`;
export const ReceiptHead = styled.div`
  width: 100%;
  padding: 10px 0;
  color: ${theme.fc09};
  font-size: ${theme.fs14};
  border-bottom: 1px solid ${theme.rgba04};
  span {
    color: ${theme.fc15};
    font-weight: 500;
  }
`;
export const ReceiptPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.fc09};
  font-size: ${theme.fs24};
  font-weight: 600;
  padding: 40px 20px;
  span {
    font-size: ${theme.fs13};
    font-weight: 400;
    margin-top: 10px;
    color: ${theme.fc06};
  }
  &.total {
    color: ${theme.fc15};
  }
  @media (max-width: 990px) {
    padding: 40px 10px;
  }
`;
