import styled from 'styled-components';
import theme from '../shared/style/theme';

export const MainContainer = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 15px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 98%;
    margin-top: 20px;
    padding: 0px;
  }
  p {
    color: ${theme.fc10};
    font-size: ${theme.fs16};
    line-height: 25px;
    &.green {
      color: ${theme.fc15};
    }
    &.small {
      font-size: ${theme.fs13};
      line-height: 15px;
      span {
        font-weight: 800;
      }
    }
    &.discount {
      font-size: ${theme.fs12};
      text-decoration: line-through;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  &.bottom-line {
    padding-bottom: 20px;
    border-bottom: 0.5px solid ${theme.ls08};
  }
`;
