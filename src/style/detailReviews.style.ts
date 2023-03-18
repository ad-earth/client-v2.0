import StarRoundedIcon from '@mui/icons-material/StarRounded';
import styled from 'styled-components';
import theme from '../shared/style/theme';

export const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const List = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  p {
    color: ${theme.fc09};
    font-size: ${theme.fs13};
    margin: 10px 0;
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.ls13};
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.ls13};
  color: ${theme.fc09};
`;

export const CommentText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: ${theme.fs14};
`;

export const StarWrapper = styled.div`
  display: flex;
`;

export const IcStar = styled(StarRoundedIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs18}`,
    color: `${theme.fc18}`,
  },
});

export const WriterInfo = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: ${theme.fs13};
  text-align: right;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 5px;
  button {
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
