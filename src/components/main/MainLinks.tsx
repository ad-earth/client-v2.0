import { useNavigate } from 'react-router-dom';
import { GROCERY, INSTA, PLASTIC } from '../../constants';
import * as t from '../../style/mainLinks.style';

export default function MainLinks() {
  const navigate = useNavigate();

  const navigateGrocery = () => navigate('/list/식품');
  const openInstaPage = () =>
    window.open('https://www.instagram.com/p/CO2NyoapBRY');
  const navigateLiving = () => navigate('/list/생활');

  return (
    <t.Background>
      <t.MainContainer>
        <t.Link onClick={navigateGrocery}>
          <img src={GROCERY} alt="식생활에서 하는 환경보호" />
        </t.Link>
        <t.SmallLinkWrapper>
          <t.SmallLink onClick={openInstaPage}>
            <img src={INSTA} alt="뉴용지물" />
          </t.SmallLink>
          <t.SmallLink onClick={navigateLiving}>
            <img src={PLASTIC} alt="덜쓸궁리 비닐봉지" />
          </t.SmallLink>
        </t.SmallLinkWrapper>
      </t.MainContainer>
    </t.Background>
  );
}
