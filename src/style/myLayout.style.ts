import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1200px;
  margin: 80px auto 100px;
  position: relative;
  display: flex;
  padding: 0 20px;
  @media (max-width: 990px) {
    flex-direction: column;
    background-color: ${({ theme }) => theme.bg06};
    padding: 0;
    margin: 0 auto 100px;
  }
`;
export const MyPageSection = styled.section`
  width: 84%;
  box-sizing: border-box;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.bg01};
  @media (max-width: 990px) {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.ls03};
  }
`;
export const PageSection = styled.section`
  min-height: 400px;
`;
