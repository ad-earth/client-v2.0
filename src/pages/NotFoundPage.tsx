import { useNavigate } from 'react-router-dom';
import * as t from '../style/notFoundPage.style';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <t.Section>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <t.BtnBox>
        <t.NotFoundBtn onClick={() => navigate(-1)}>이전화면</t.NotFoundBtn>
        <t.NotFoundBtn onClick={() => navigate('/home')}>
          홈으로 가기
        </t.NotFoundBtn>
      </t.BtnBox>
    </t.Section>
  );
}
