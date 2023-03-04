import styled from 'styled-components';
import theme from '../../shared/style/theme';

interface PropsType {
  msg?: string;
}

const ErrMsg = (props: PropsType) => {
  return (
    <Container>
      <Message>{props.msg}</Message>
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
`;
const Message = styled.span`
  line-height: 30px;
  font-size: ${theme.fs14};
  color: ${theme.fc19};
`;

export default ErrMsg;
