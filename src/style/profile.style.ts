import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;
export const Wrap = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: -25px -60px 0 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg09};
  input {
    display: none;
  }
  .upload {
    color: ${({ theme }) => theme.fc01};
    cursor: pointer;
  }
`;
