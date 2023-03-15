import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${({ theme }) => theme.fc15};
    font-size: ${({ theme }) => theme.fs16};
    margin-top: 10px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const UserImg = styled.img`
  width: ${props => (props.width ? props.width : '40px')};
  height: ${props => (props.height ? props.height : '40px')};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
