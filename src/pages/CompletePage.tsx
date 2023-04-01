import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../elements/Button';
import useComplete from '../query/useComplete';
import * as t from '../style/completePage.style';

export default function CompletePage() {
  const {
    state: { price },
  } = useLocation();
  const { completeInfo } = useComplete();

  const navigate = useNavigate();
  const routeToMain = () => navigate('/');

  const now = new Date();
  const due = new Date(now.setDate(now.getDate() + 1));
  const dueDate = due.toLocaleDateString('ko', {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short',
  });

  return (
    <t.Container>
      <t.Complete>
        <t.Head>
          <h1>주문완료</h1>
          <h2>
            아래 계좌정보로 입금해 주시면
            <br /> 결제 처리가 완료됩니다.
          </h2>
        </t.Head>
        <t.OrderedInfo>
          <t.Wrap>
            <t.Title>입금계좌 안내</t.Title>
            <t.InfoWrap>
              <t.InfoText>지구은행</t.InfoText>
              <t.InfoText>123456789</t.InfoText>
              <t.InfoText>(주)광고지구</t.InfoText>
              <t.HighText>
                {price && parseInt(price).toLocaleString()}원
              </t.HighText>
            </t.InfoWrap>
          </t.Wrap>
          <t.Wrap>
            <t.Title>입금 기간</t.Title>
            <t.InfoText>{dueDate} 까지</t.InfoText>
          </t.Wrap>
          <t.Wrap>
            <t.Title>주문 번호</t.Title>
            <t.InfoText>{completeInfo?.o_No}</t.InfoText>
          </t.Wrap>
          <t.Wrap>
            <t.Title>배송지</t.Title>
            <t.InfoWrap>
              <t.InfoText>{completeInfo?.d_Name}</t.InfoText>
              <t.InfoText>{completeInfo?.d_Phone}</t.InfoText>
              <t.InfoText>
                {completeInfo?.d_Address2} {completeInfo?.d_Address3}
              </t.InfoText>
              <t.HighText>({completeInfo?.d_Address1})</t.HighText>
            </t.InfoWrap>
          </t.Wrap>
          <t.Wrap>
            <t.Title>배송 방법</t.Title>
            <t.InfoText>택배</t.InfoText>
          </t.Wrap>
        </t.OrderedInfo>
        <Button {...btnStyle} onClick={routeToMain} />
      </t.Complete>
    </t.Container>
  );
}
const btnStyle = {
  text: '홈으로',
  width: '460px',
  padding: '12px 0',
  margin: '50px auto',
};
