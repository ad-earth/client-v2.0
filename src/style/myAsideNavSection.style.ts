import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Aside = styled.aside`
  width: 16%;
  padding: 0 12px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    width: 100%;
    padding: 0;
  }
`;

export const DesktopNavSection = styled.ul``;

export const NavItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
`;
export const MobileNavSection = styled.div`
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
