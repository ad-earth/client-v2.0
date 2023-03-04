import styled from 'styled-components';
import theme from '../shared/style/theme';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import Badge from '@mui/material/Badge';

interface Type {
  isHeaderVisible?: boolean;
}

export const Container = styled.header<Type>`
  width: 100%;
  display: flex;
  border-bottom: ${props =>
    props.isHeaderVisible ? 'transparent' : `1px solid ${theme.fc02}`};
  background-color: ${props => props.isHeaderVisible && `${theme.bg16}`};
  position: ${props => props.isHeaderVisible && 'fixed'};
  top: ${props => props.isHeaderVisible && '0'};
  right: ${props => props.isHeaderVisible && '0'};
  left: ${props => props.isHeaderVisible && '0'};
  z-index: ${props => props.isHeaderVisible && '10'};
  transition: ${props => props.isHeaderVisible && 'top 0.2s ease-in-out'};
`;
export const Nav = styled.div<Type>`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  color: ${props =>
    props.isHeaderVisible ? `${theme.fc01}` : `${theme.fc15}`};
  box-sizing: border-box;
  img {
    width: 150px;
    object-fit: contain;
    :hover {
      cursor: pointer;
    }
  }
  p {
    margin: 10px 10px 0 10px;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 778px) {
    img {
      width: 60%;
    }
  }
  @media (max-width: 990px) {
    p {
      display: none;
    }
  }
`;
export const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
export const RightSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const UserIcon = styled(PersonOutlineOutlinedIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs30}`,
    marginTop: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
});
export const ShopIcon = styled(ShoppingBagOutlinedIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs30}`,
    marginRight: '5px',
    cursor: 'pointer',
  },
});
export const CountBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    fontSize: 10,
    minWidth: '15px',
    height: '15px',
    top: 28,
    padding: 0,
    marginRight: '10px',
    color: `${theme.fc01}`,
    backgroundColor: `${theme.fc09}`,
  },
});
export const EtcIcon = styled(DehazeRoundedIcon)({
  '&.MuiSvgIcon-root': {
    fontSize: `${theme.fs30}`,
    color: `${theme.fc15}`,
    marginTop: '5px',
    marginRight: '5px',
    marginLeft: '5px',
    cursor: 'pointer',
  },
});
