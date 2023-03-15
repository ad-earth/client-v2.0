import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import * as t from '../style/completePage.style';

export default function CompletePage() {
  const navigate = useNavigate();
  const routeToMain = () => {
    navigate('/');
  };
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
              <t.InfoText>12309812</t.InfoText>
              <t.InfoText>(주)광고지구</t.InfoText>
              <t.HighText>37,180원</t.HighText>
            </t.InfoWrap>
          </t.Wrap>
          <t.Wrap>
            <t.Title>입금 기간</t.Title>
            <t.InfoText>2023-03-14 19:34까지</t.InfoText>
          </t.Wrap>
          <t.Wrap>
            <t.Title>주문 번호</t.Title>
            <t.InfoText>1678703670621</t.InfoText>
          </t.Wrap>
          <t.Wrap>
            <t.Title>배송지</t.Title>
            <t.InfoWrap>
              <t.InfoText>주문자 이름</t.InfoText>
              <t.InfoText>010-1234-1232</t.InfoText>
              <t.InfoText>49071부산 영도구 나눔길 1 (영선동2가)</t.InfoText>
              <t.HighText>(40123)</t.HighText>
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
