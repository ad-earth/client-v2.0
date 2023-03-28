import { useNavigate } from 'react-router-dom';
import { GROCERY, INSTA, PLASTIC } from '../../constants';
import * as t from '../../style/mainLinks.style';

export default function MainLinks() {
  const navigate = useNavigate();

  return (
    <t.Background>
      <t.MainContainer>
        <t.Link onClick={() => navigate('/list/식품')}>
          <img src={GROCERY} alt="식생활에서 하는 환경보호" />
        </t.Link>
        <t.SmallLinkWrapper>
          <t.SmallLink
            onClick={() =>
              window.open('https://www.instagram.com/p/CO2NyoapBRY')
            }
          >
            <img src={INSTA} alt="뉴용지물" />
          </t.SmallLink>
          <t.SmallLink onClick={() => navigate('/list/생활')}>
            <img src={PLASTIC} alt="덜쓸궁리 비닐봉지" />
          </t.SmallLink>
        </t.SmallLinkWrapper>
      </t.MainContainer>
    </t.Background>
  );
}
