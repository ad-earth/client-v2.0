import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const HeartLineIcon = styled(FavoriteBorderIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc09}`,
  },
});

export const HeartIcon = styled(FavoriteIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.bg16}`,
  },
});

export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.fc09};
`;
