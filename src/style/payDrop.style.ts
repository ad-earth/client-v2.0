import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.ls03};
  cursor: pointer;
  ul {
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.bg01};
    border: 1px solid ${({ theme }) => theme.ls03};
  }
  button {
    line-height: ${({ theme }) => theme.fs24};
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.fc08};
    width: 100%;
    padding: 10px 20px;
    outline: none;
    text-align: left;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.bg04};
    }
  }
`;
export const Dropdown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  line-height: ${({ theme }) => theme.fs24};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.fc08};
`;
