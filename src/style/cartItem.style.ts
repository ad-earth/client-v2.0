import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  border-bottom: 1px solid ${theme.rgba04};
  @media (max-width: 990px) {
    width: 95%;
    display: flex;
    flex-direction: column;
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
export const ProdInfo = styled.div`
  width: 67%;
  display: flex;
  flex-direction: row;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 20px;
  }
  @media (max-width: 990px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const InfoWrap = styled.div`
  width: 100%;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  p {
    margin-bottom: 15px;
  }
`;
export const Option = styled.p`
  width: 80%;
  margin: 2px 0;
  color: ${theme.fc09};
  font-size: ${theme.fs13};
  padding: 8px 12px 8px 10px;
  background-color: ${theme.rgba12};
  @media (max-width: 990px) {
    width: 100%;
  }
`;
export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.fc09};
  span {
    margin: 10px 0;
    font-size: ${theme.fs15};
  }
  p {
    margin: 6px 0;
    font-size: ${theme.fs20};
    font-weight: bold;
  }
  &.mid {
    width: 19%;
  }
  &.small {
    width: 15%;
  }
`;
export const SmallInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
export const SmallInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.fc09};
  margin-bottom: 5px;
  &.top {
    font-weight: 600;
    border-bottom: 1px solid ${theme.rgba04};
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;
export const BtnWrap = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;
