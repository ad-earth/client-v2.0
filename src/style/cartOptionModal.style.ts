import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  @media (max-width: 990px) {
    width: 100vw;
    height: 100vh;
  }
`;
export const InfoHead = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.ls02};
  font-size: ${({ theme }) => theme.fs20};
  font-weight: 700;
  color: ${({ theme }) => theme.fc14};
  .close {
    font-size: ${({ theme }) => theme.fs24};
    color: ${({ theme }) => theme.fc02};
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const ProdInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  img {
    width: 62px;
    height: 62px;
    object-fit: contain;
    margin-right: 20px;
  }
`;
export const ProdDesc = styled.div`
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  flex-direction: column;
  span {
    margin-top: 5px;
    color: ${({ theme }) => theme.fc15};
  }
`;
export const BtnWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px auto;
  @media (max-width: 990px) {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`;
