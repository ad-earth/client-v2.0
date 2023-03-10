import styled from 'styled-components';
import theme from '../shared/style/theme';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Container = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;

export const HeartLineIcon = styled(FavoriteBorderIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc05}`,
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
  color: ${theme.bg09};
`;
