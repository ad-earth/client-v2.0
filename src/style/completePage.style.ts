import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg03};
`;
export const Complete = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 990px) {
    width: 100%;
  }
`;
export const Head = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  text-align: center;
  h1 {
    font-size: ${({ theme }) => theme.fs26};
    color: ${({ theme }) => theme.fc13};
    margin-bottom: 10px;
  }
  h2 {
    font-size: ${({ theme }) => theme.fs20};
    color: ${({ theme }) => theme.fc08};
    line-height: ${({ theme }) => theme.fs30};
  }
`;
export const OrderedInfo = styled.section`
  width: 460px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.bg01};
`;
export const Wrap = styled.div`
  display: flex;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.rgba04};
  p {
    font-size: ${({ theme }) => theme.fs14};
    line-height: ${({ theme }) => theme.fs24};
  }
`;
export const Title = styled.p`
  width: 120px;
  color: ${({ theme }) => theme.fc07};
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoText = styled.p`
  color: ${({ theme }) => theme.fc14};
`;
export const HighText = styled(InfoText)`
  color: ${({ theme }) => theme.fc15};
  font-weight: 600;
`;
