import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 96%;
  max-width: 1200px;
  margin: 50px auto;
  padding: 50px 12px 15px 12px;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  border-bottom: 1px solid ${theme.rgba04};
`;
