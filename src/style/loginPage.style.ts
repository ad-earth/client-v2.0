import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 1200px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 210px;
    object-fit: contain;
  }
  form {
    width: 350px;
  }
  @media (max-width: 990px) {
    width: 100%;
    form {
      width: 90%;
    }
  }
`;
export const EtcWrap = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  @media (max-width: 990px) {
    width: 90%;
  }
`;
export const EtcContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-size: ${theme.fs15};
    color: ${theme.fc09};
    cursor: pointer;
  }
`;
