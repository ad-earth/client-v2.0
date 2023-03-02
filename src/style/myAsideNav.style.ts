import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DesktopNavContent = styled.ul``;
export const NavItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
`;
export const MobileNavContent = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.ls03};
  width: calc(100% / 3);
  float: left;
  & a {
    width: 100%;
    float: left;
    text-align: center;
    line-height: 40px;
    background-color: ${({ theme }) => theme.bg01};
  }
`;

export const Link = styled(NavLink)`
  border-bottom: 2px solid ${({ theme }) => theme.fc01};
  color: ${({ theme }) => theme.fc14};
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.fc15};
  }
`;
