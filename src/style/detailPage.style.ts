import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  padding: 0 15px;
  box-sizing: border-box;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;
