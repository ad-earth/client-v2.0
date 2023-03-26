import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Tab = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.fc14};
  font-size: ${({ theme }) => theme.fs16};
  line-height: ${({ theme }) => theme.fs24};
  cursor: pointer;
  padding-bottom: 5px;
  :hover {
    transition: all 150ms ease-out;
    color: ${({ theme }) => theme.fc10};
  }
  &.isActive {
    color: ${({ theme }) => theme.fc15};
    border-bottom: 2px solid ${({ theme }) => theme.ls04};
  }
  &.isNotActive {
    color: ${({ theme }) => theme.fc14};
  }
`;
export const ShipList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 5px 20px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.ls10};
  input {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    accent-color: ${({ theme }) => theme.bg16};
    border: 1px solid ${({ theme }) => theme.ls10};
    margin-right: 10px;
  }
  p {
    color: ${({ theme }) => theme.fc08};
    font-size: ${({ theme }) => theme.fs16};
    line-height: ${({ theme }) => theme.fs24};
    cursor: pointer;
  }
  label {
    color: ${({ theme }) => theme.fc14};
    font-size: ${({ theme }) => theme.fs16};
    line-height: ${({ theme }) => theme.fs24};
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;
export const InputArea = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 15px 0;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.fc14};
  font-size: ${({ theme }) => theme.fs16};
  line-height: ${({ theme }) => theme.fs24};
`;
export const TextGray = styled(Text)`
  color: ${({ theme }) => theme.fc08};
`;
export const TextGreen = styled(Text)`
  color: ${({ theme }) => theme.fc15};
  font-weight: 500;
  margin-top: 10px;
`;
