import * as t from '../style/mainLinks.style';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  jigushopGrocery,
  instagram,
  plasticBag,
} from '../shared/utils/imgUrls';

const MainLinks = () => {
  const navigate = useNavigate();

  return (
    <t.Background>
      <t.MainContainer>
        <t.Link onClick={() => navigate('/list/식품')}>
          <img src={jigushopGrocery} alt="식생활에서 하는 환경보호" />
        </t.Link>
        <t.SmallLinkWrapper>
          <t.SmallLink
            onClick={() =>
              window.open('https://www.instagram.com/p/CO2NyoapBRY')
            }
          >
            <img src={instagram} alt="뉴용지물" />
          </t.SmallLink>
          <t.SmallLink onClick={() => navigate('/list/생활')}>
            <img src={plasticBag} alt="덜쓸궁리 비닐봉지" />
          </t.SmallLink>
        </t.SmallLinkWrapper>
      </t.MainContainer>
    </t.Background>
  );
};

export default MainLinks;
