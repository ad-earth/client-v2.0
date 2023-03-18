import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
  section {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 0 5px 0;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Thumbnail = styled.img<{ isAd: boolean }>`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  border: ${props => props.isAd && `1px solid ${theme.fc11}`};
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
  font-size: ${theme.fs14};
  color: ${theme.fc11};
  text-align: left;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: ${theme.fs13};
  color: ${theme.fc15};
  display: flex;
  padding: 5px 0 5px 0;
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
    color: `${theme.fc09}`,
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
  color: ${theme.fc09};
`;
