import * as t from '../style/footer.style';
import whiteLogo from '../assets/whiteLogo.png';

export default function Footer() {
  return (
    <t.Container>
      <t.Footer>
        <t.Wrap>
          <img src={whiteLogo} alt="footLogo" />
          <t.Service>
            <a href="https://adearth-admin.shop/">⇤ 광고주 솔루션 바로가기</a>
            <span>• 회사명 : 주식회사 광고지구 | 대표자 : 광고지구</span>
            <span>
              • 주소 : 서울특별시 광고구 지구로 1길 23, 1층 | 이메일 :
              adEarth@jigushop.co.kr | 팩스 : 1234-1234-1234
            </span>
            <span>
              • 사업자등록번호 : 000-00-00000 | 통신판매업신고 :
              제0000-서울00-0000
            </span>
            <span>
              • 개인정보보호책임자 : 광고지구 | 고객센터: 02-123-4567 | 호스팅
              제공자 : (주)광고지구
            </span>
          </t.Service>
        </t.Wrap>
      </t.Footer>
    </t.Container>
  );
}
