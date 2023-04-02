import styled from 'styled-components';
import theme from '../shared/style/theme';

interface IProps {
  msg?: string;
}

function ErrMsg(props: IProps) {
  return (
    <Container>
      <Message>{props.msg}</Message>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
`;
const Message = styled.span`
  line-height: 30px;
  font-size: ${theme.fs14};
  color: ${theme.fc19};
`;

export default ErrMsg;
