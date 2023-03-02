import styled from 'styled-components';
import theme from '../shared/style/theme';

export const Container = styled.div`
  width: 100%;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-sizing: border-box;
  background-color: ${theme.bg16};
`;
export const Wrap = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 30px auto;
  img {
    width: 20%;
    margin: auto;
    object-fit: contain;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
    img {
      width: 18%;
    }
  }
  @media (max-width: 990px) {
    width: 100%;
    img {
      display: none;
    }
  }
`;
export const Service = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  text-align: left;
  a {
    font-weight: 700;
    color: ${theme.fc01};
    font-size: ${theme.fs18};
    margin-bottom: 20px;
  }
  span {
    font-weight: 400;
    color: ${theme.fc01};
    font-size: ${theme.fs16};
    line-height: ${theme.fs24};
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
    font-size: ${theme.fs15};
  }
  @media (max-width: 990px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${theme.fs11};
    span {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: ${theme.fs10};
    }
  }
`;
