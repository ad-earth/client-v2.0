import styled from 'styled-components';
import theme from '../shared/style/theme';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
  section {
    display: flex;
    gap: 4px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: grey;
  background-size: cover;
`;

export const Color = styled.div<{ code: string }>`
  width: 9px;
  height: 9px;
  background: ${props => props.code};
  border: 1px solid ${theme.ls04};
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
`;

export const Name = styled.p`
  margin: 10px 0;
  font-size: ${theme.fs14};
  color: ${theme.fc11};
  text-align: left;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: ${theme.fs13};
  color: ${theme.fc15};
  display: flex;
  span {
    font-size: ${theme.fs13};
    color: ${theme.fc05};
    display: flex;
    text-decoration-line: line-through;
    margin-left: 6px;
  }
`;

export const BubbleIcon = styled(ChatBubbleOutlineIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc05}`,
    cursor: 'pointer',
  },
});

export const HeartLineIcon = styled(FavoriteBorderIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc05}`,
    cursor: 'pointer',
  },
});

export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`;
