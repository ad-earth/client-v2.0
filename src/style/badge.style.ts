import styled, { css } from 'styled-components';
import type { BadgeType } from '../components/common/Badge';
import theme from '../shared/style/theme';

export const Container = styled.div`
  display: flex;
  width: auto;
  box-sizing: border-box;
  font-size: inherit;
`;

export const BadgeBox = styled.div<BadgeType>`
  ${({ type }) => {
    if (type === 'NEW') {
      return css`
        background-color: ${theme.bg16};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls16};
      `;
    } else if (type === 'BEST') {
      return css`
        background-color: ${theme.bg01};
        color: ${theme.fc19};
        border: 1px solid ${theme.ls07};
      `;
    } else if (type === 'SALE') {
      return css`
        background-color: ${theme.bg17};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls17};
      `;
    } else if (type === 'SOLDOUT' || 'AD') {
      return css`
        background-color: ${theme.bg12};
        color: ${theme.fc01};
        border: 1px solid ${theme.ls12};
      `;
    }
  }};
  font-size: ${theme.fs11};
  font-weight: 400;
  text-align: center;
  padding: 2px 8px;
`;
