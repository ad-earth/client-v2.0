import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section``;
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
export const Main = styled.main``;

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
export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .link {
    display: contents;
  }
`;
export const ProductLink = styled(Link)``;
export const ProductStatus = styled.p`
  width: 100px;
  text-align: center;
  color: ${({ theme }) => theme.fc09};
  font-weight: 600;
  margin-right: 144px;
  cursor: pointer;
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

//orderInfo
export const TopInfo = styled.div`
  line-height: 15px;
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  @media (max-width: 990px) {
    flex-direction: row-reverse;
    padding: 12px 15px;
  }
`;
export const OrderNumber = styled.div`
  color: ${({ theme }) => theme.fc12};
  display: flex;
  & span {
    color: ${({ theme }) => theme.fc21};
    padding-left: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & .link {
    display: flex;
  }
`;
export const Label = styled.p`
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ArrowIcon = styled.button`
  width: 15px;
  height: 15px;
  border: 1px solid ${({ theme }) => theme.ls15};
  border-radius: 50%;
  background: none;
  position: relative;
  left: 4px;

  :after {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 4px;
    left: 43%;
    border-left: 1px solid ${({ theme }) => theme.ls15};
    border-top: 1px solid ${({ theme }) => theme.ls15};
    transform: translateX(-50%) rotate(130deg);
  }
`;
//주문일자
export const Date = styled.div`
  color: ${({ theme }) => theme.fc08};
  display: flex;
  & span {
    padding-left: 4px;
    @media (max-width: 990px) {
      font-weight: 700;
      color: ${({ theme }) => theme.fc12};
    }
  }
`;
