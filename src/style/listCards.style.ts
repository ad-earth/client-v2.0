import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 12px 80px 12px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21%, auto));
  @media (max-width: 790px) {
    width: 100%;
    margin: 30px auto;
    grid-template-columns: repeat(2, 50%);
  }
`;
