import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4% 0;
  background: ${theme.bg14};
`;

export const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;

export const Link = styled.div`
  width: 47%;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    width: 96%;
  }
`;

export const SmallLinkWrapper = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 990px) {
    width: 96%;
    gap: 0px;
  }
`;

export const SmallLink = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    margin-top: 3%;
  }
`;
