import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  z-index: 9999;
  position: fixed;
  @media (min-width: 991px) {
    display: none;
  }
`;
export const Aside = styled.div`
  width: 300px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg01};
`;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.fc15};
  p {
    font-size: ${({ theme }) => theme.fs16};
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
  }
  .etcIcon {
    font-size: ${({ theme }) => theme.fs30};
    color: ${({ theme }) => theme.fc15};
    cursor: pointer;
  }
`;
export const bottom = styled.div`
  padding: 20px;
  li {
    fontsize: ${({ theme }) => theme.fs12};
    color: ${({ theme }) => theme.fc15};
    margin-bottom: 20px;
    cursor: 'pointer';
  }
`;
