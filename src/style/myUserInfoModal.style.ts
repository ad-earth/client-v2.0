import styled from 'styled-components';
import theme from '../shared/style/theme';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const Container = styled.div`
  width: 400px;
  form {
    box-sizing: border-box;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px auto;
  }
  p {
    text-align: left;
    margin: 30px 0 10px 0;
    font-size: ${theme.fs14};
    color: ${theme.fc14};
  }
`;
export const InfoHead = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid ${theme.ls02};
  font-size: ${theme.fs20};
  font-weight: 700;
  color: ${theme.fc14};
`;
export const Close = styled(CloseRoundedIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs24}`,
    color: `${theme.fc02}`,
    position: 'absolute',
    top: 15,
    right: 15,
    cursor: 'pointer',
  },
});
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
