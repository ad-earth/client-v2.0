import styled from 'styled-components';

export const Section = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 70px 0;
  & h1 {
    font-size: 200px;
    line-height: 200px;
    color: ${({ theme }) => theme.bg16};
  }
  & h3 {
    font-size: 50px;
  }
  & p {
    font-size: 20px;
    margin: 42px 0 62px 0;
  }
`;
export const BtnBox = styled.div`
  width: 424px;
  display: flex;
  justify-content: space-between;
`;
export const NotFoundBtn = styled.button``;
