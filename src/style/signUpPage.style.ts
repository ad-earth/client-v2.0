import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
  form {
    width: 80%;
    margin: 0 auto;
  }
  p {
    text-align: left;
    margin: 30px 0 10px 0;
    font-size: ${theme.fs14};
    color: ${theme.fc14};
  }
`;
export const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    text-align: left;
    margin: 0 20px 0 5px;
    font-size: ${theme.fs15};
    color: ${theme.fc09};
  }
`;
export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px 0;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.ls10};
  border-radius: 50%;
`;
