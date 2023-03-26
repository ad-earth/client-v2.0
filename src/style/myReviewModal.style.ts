import Rating from '@mui/material/Rating';
import styled from 'styled-components';

export const Base = styled.div`
  width: 462px;
  color: ${({ theme }) => theme.fc14};
  @media (max-width: 990px) {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
`;
export const Header = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 24px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.ls02};
`;
export const Title = styled.span`
  font-size: ${({ theme }) => theme.fs16};
`;
export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.fc02};
  cursor: pointer;
  ::before {
    content: '';
    width: 1px;
    height: 24px;
    position: absolute;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.bg13};
  }
  ::after {
    content: '';
    width: 1px;
    height: 24px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.bg13};
  }
`;
export const BodyFormContainer = styled.form`
  padding: 24px;
`;
export const ProductInfo = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.ls02};
  display: flex;
`;

export const StarRateBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px;
  & strong {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fs18};
    display: inline-block;
    margin-bottom: 16px;
  }
`;
export const Strong = styled.strong``;

export const TextReview = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  margin-bottom: 25px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  border: thin solid ${({ theme }) => theme.ls02};
  border-radius: 4px;
  background: ${({ theme }) => theme.bg04};
  padding: 12px 12px 24px;
  :focus {
    outline: 1px solid ${({ theme }) => theme.ls16};
  }
`;
export const TextareaCount = styled.span`
  position: absolute;
  right: 3px;
  bottom: 1px;
  padding: 5px;
  font-size: ${({ theme }) => theme.fs13};
  background: ${({ theme }) => theme.bg01};
  border-radius: 5px;
`;
export const GuideText = styled.p`
  font-size: ${({ theme }) => theme.fs12};
  border: 1px solid ${({ theme }) => theme.ls04};
  background: ${({ theme }) => theme.bg};
  display: flex;
  padding: 16px;
`;
export const BottonBox = styled.div`
  @media (max-width: 990px) {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const RatingWrapper = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'red',
  },
  '& .MuiRating-iconHover': {
    color: 'red',
  },
});
