import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg03};
`;
export const Payment = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 60px 0;
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
    color: ${({ theme }) => theme.fc13};
    font-size: ${({ theme }) => theme.fs28};
  }
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    article {
      display: flex;
      flex-direction: column;
      padding: 30px;
      margin-bottom: 20px;
      background-color: ${({ theme }) => theme.bg01};
      h2 {
        font-size: ${({ theme }) => theme.fs20};
        color: ${({ theme }) => theme.fc13};
        margin-bottom: 20px;
      }
      hr {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.ls05};
        margin: 15px 0;
      }
      h4 {
        font-size: ${({ theme }) => theme.fs16};
        color: ${({ theme }) => theme.fc14};
        line-height: ${({ theme }) => theme.fs24};
        font-weight: 400;
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.fc14};
  font-size: ${({ theme }) => theme.fs16};
  line-height: ${({ theme }) => theme.fs24};
`;
export const TextGray = styled(Text)`
  color: ${({ theme }) => theme.fc08};
`;
export const InputArea = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const Radio = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  accent-color: ${({ theme }) => theme.bg16};
  border: 1px solid ${({ theme }) => theme.ls10};
  margin-right: 10px;
`;
export const CheckBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  p {
    margin: 0 10px;
  }
  label {
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.fc14};
  }
`;
export const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${({ theme }) => theme.bg16};
  border: 1px solid ${({ theme }) => theme.ls10};
  margin-right: 10px;
`;
