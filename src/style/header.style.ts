import styled from 'styled-components';

interface Type {
  isHeaderVisible?: boolean;
}

export const Container = styled.header<Type>`
  width: 100%;
  display: flex;
  border-bottom: ${props =>
    props.isHeaderVisible ? 'transparent' : `1px solid ${props.theme.fc02}`};
  background-color: ${props => props.isHeaderVisible && `${props.theme.bg16}`};
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
    props.isHeaderVisible ? props.theme.fc01 : props.theme.fc15};
  box-sizing: border-box;
  img {
    width: 150px;
    height: auto;
    object-fit: contain;
    margin-right: 10px;
    :hover {
      cursor: pointer;
    }
  }
  p {
    margin: 10px 5px 0 0;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 778px) {
    img {
      width: 60%;
      height: auto;
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
  gap: 5px;
  .userIcon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .etcIcon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
export const CartStatus = styled.div`
  position: relative;
  .cartIcon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-top: 4px;
  }
`;
export const Badge = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg10};
  color: ${({ theme }) => theme.fc01};
  font-size: ${({ theme }) => theme.fs10};
  text-align: center;
  position: absolute;
  right: -2px;
  top: 20px;
`;
