import styled from 'styled-components';

// interface StyledProps {
//   type?: string;
// }

export const Base = styled.div`
  text-align: left;
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
  line-height: 30px;
  @media (max-width: 990px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    margin: 0;
    padding: 0 20px 20px;
  }
`;

export const BackIcon = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  position: relative;
  margin-right: 12px;
  overflow: hidden;
  cursor: pointer;
  :before {
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    margin-top: 2px;
    border-top: 1px solid ${({ theme }) => theme.ls13};
    border-left: 1px solid ${({ theme }) => theme.ls13};
  }
`;
export const Label = styled.span`
  font-weight: 600;
  width: 80px;
  margin-right: 20px;
  color: ${({ theme }) => theme.fc09};
`;
export const Strong = styled.strong``;

const Article = styled.article`
  margin-bottom: 40px;
`;

// 주문정보
export const OrderNumerArticle = styled(Article)`
  font-size: ${({ theme }) => theme.fs15};
  line-height: 1.6;
  border: 1px solid ${({ theme }) => theme.rgba06};
  display: flex;
  margin-bottom: 10px;
  padding: 16px 20px;
  @media (max-width: 990px) {
    /* border: none; */
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
export const OrderDate = styled.div`
  margin-right: 20px;
`;
export const OrderNumberInfo = styled.div``;

//주문리스트
export const OrderListArticle = styled(Article)``;

//주문데이터 테이블
export const ListHead = styled.ul`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.rgba06};
  overflow: hidden;
  @media (max-width: 990px) {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
export const ListTh = styled.li`
  float: left;
  width: 45%;
  padding: 10px 16px;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.rgba06};
  &:last-child {
    width: 55%;
    border-right: none;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

// export const Table = styled.table`
//   width: 100%;
//   font-size: ${({ theme }) => theme.fs15};
//   display: table;
//   border-collapse: collapse;
//   border: 1px solid ${({ theme }) => theme.rgba06};
//   margin-bottom: 40px;
//   @media (max-width: 990px) {
//     border: none;
//     border-top: 1px solid ${({ theme }) => theme.rgba06};
//   }
// `;

// export const Thead = styled.thead`
//   @media (max-width: 990px) {
//     display: none;
//   }
// `;
// export const Tbody = styled.tbody``;
// export const Tr = styled.tr`
//   border: 1px solid ${({ theme }) => theme.rgba06};
//   @media (max-width: 990px) {
//     display: flex;
//     flex-direction: column;
//     border: none;
//     border-bottom: 1px solid ${({ theme }) => theme.rgba06};
//     padding: 20px 15px;
//   }
// `;
// export const Th = styled.th`
//   font-weight: initial;
//   padding: 10px 16px;
//   text-align: center;
// `;
// export const Td = styled.td<StyledProps>`
//   border: 1px solid ${({ theme }) => theme.rgba06};
//   border-collapse: collapse;
//   padding: 16px 20px;
//   text-align: center;
//   @media (max-width: 990px) {
//     border: none;
//     padding: 0;
//     ${props =>
//       props.type === 'center' &&
//       css`
//         display: none;
//       `}
//   }
// `;
// export const IsMobileText = styled(Tr)`
//   text-align: center;
// `;
export const StateText = styled.span`
  padding: 10px 16px;
  color: ${({ theme }) => theme.fc09};
  font-weight: 600;
  @media (max-width: 990px) {
    padding: 0;
  }
`;
export const StatusWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
    margin: 10px 0 0 100px;
  }
`;
export const ButtonBox = styled.div`
  width: 130px;
  float: right;
  @media (max-width: 990px) {
    width: 100%;
    margin-top: 14px;
  }
`;

//구매자 정보
export const OrderUserArticle = styled(Article)``;
//배송지 정보
export const OrderAddressArticle = styled(Article)``;
//주문금액 상세
export const OrderPriceArticle = styled(Article)``;

//OrderPaymentMethod
export const OrderPaymentBox = styled.div`
  margin-bottom: 40px;
`;
export const Text = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;

export const Contents = styled.div`
  line-height: 30px;
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 16px 15px;
  & .price {
    padding: 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 990px) {
      flex-direction: column;
    }
  }
`;
export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  display: inline-block;
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;

export const Item = styled.div`
  color: ${({ theme }) => theme.fc14};
  display: flex;
  align-items: flex-start;
  /* margin-top: 12px; */
`;
