import styled from 'styled-components';

interface Type {
  isChecked?: boolean;
}

export const Container = styled.div`
  width: 370px;
`;
export const SearchHead = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.ls02};
  font-size: ${({ theme }) => theme.fs15};
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
export const SearchBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  p {
    width: 100%;
    color: ${({ theme }) => theme.fc14};
    font-size: ${({ theme }) => theme.fs14};
    text-align: center;
  }
  form {
    margin: 30px 0 10px 0;
  }
`;
export const SearchNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  button {
    width: 50%;
    fontsize: ${({ theme }) => theme.fs14};
    font-weight: bold;
  }
`;
export const CheckedBtn = styled.button<Type>`
  height: 50px;
  border: ${props =>
    props.isChecked
      ? `0.5px solid ${props.theme.ls16}`
      : `0.5px solid ${props.theme.ls02}`};
  border-bottom: ${props =>
    props.isChecked ? 'none' : `0.5px solid ${props.theme.ls16}`};
  background-color: ${props =>
    props.isChecked ? `${props.theme.bg01}` : `${props.theme.bg03}`};
  color: ${props =>
    props.isChecked ? `${props.theme.fc15}` : `${props.theme.fc08}`};
`;
