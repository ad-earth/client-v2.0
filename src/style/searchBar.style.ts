import styled from 'styled-components';
import theme from '../shared/style/theme';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const InputDiv = styled.div`
  width: 40%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 4px 10px 0 0;
  border: 1px solid ${theme.ls03};
  border-radius: 30px;
  @media (max-width: 990px) {
    width: 60%;
  }
`;
export const SearchInput = styled.input`
  width: 80%;
  padding: 0 10px 0 0;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${theme.fc05};
    font-size: ${theme.fs14};
  }
`;
export const SearchIcon = styled(SearchRoundedIcon)({
  color: `${theme.fc05}`,
});
