import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
`;
export const ContentBox = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 30px ${({ theme }) => theme.rgba04};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg01};
  z-index: 10000;
  overflow: hidden;
  overflow-y: auto;
`;
export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.rgba04};
`;
